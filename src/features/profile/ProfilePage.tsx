import { useState } from 'react';
import { User } from './types';
import { mockUsers } from './profile.mock';
import UserTable from './components/UserTable';
import UserFormModal from './components/UserFormModal';
import styles from './ProfilePage.module.scss';
import logo from '../../assets/images/common/logo.png';
import { useNavigate } from 'react-router-dom';

const ProfilePage = () => {
    const [users, setUsers] = useState<User[]>(mockUsers);
    const [editingUser, setEditingUser] = useState<User | null>(null);
    const [showModal, setShowModal] = useState(false);
    const [searchTitle, setSearchTitle] = useState('');
    const [searchTag, setSearchTag] = useState('');
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const handleAddUser = (newUser: Omit<User, 'id'>) => {
        setUsers(prev => [...prev, { ...newUser, id: prev.length + 1 }]);
        setShowModal(false);
    };

    const handleEditUser = (user: User) => {
        setEditingUser(user);
        setShowModal(true);
    };

    const handleDeleteUser = (id: number) => {
        setUsers(prev => prev.filter(user => user.id !== id));
    };

    const handleLogout = () => {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        localStorage.removeItem('expiresAt');
        setIsLoggedIn(false);
        navigate('/signin');
    };

    const filteredUsers = users.filter(user => {
        return (
            user.title.toLowerCase().includes(searchTitle.toLowerCase()) &&
            user.tags.some(tag => tag.toLowerCase().includes(searchTag.toLowerCase()))
        );
    });
    const [currentPage, setCurrentPage] = useState(1);
    const usersPerPage = 10;

    const totalPages = Math.ceil(filteredUsers.length / usersPerPage);
    const paginatedUsers = filteredUsers.slice(
        (currentPage - 1) * usersPerPage,
        currentPage * usersPerPage
    );
    const handleSubmitUser = (data: User | Omit<User, 'id'>) => {
        if ('id' in data) {
            setUsers((prev) => prev.map((u) => (u.id === data.id ? { ...u, ...data } : u)));
        } else {
            setUsers((prev) => [...prev, { ...data, id: prev.length + 1 }]);
        }

        setShowModal(false);
        setEditingUser(null);
    };

    return (
        <div className={styles.wrapper}>
            <aside className={styles.sidebar}>
                <img src={logo} alt="Logo" className={styles.logo} />
                <ul>
                    <li>Post</li>
                    <button className={styles.logoutBtn} onClick={handleLogout}>
                        Logout
                    </button>
                </ul>
            </aside>

            <main className={styles.main}>
                <div className={styles.actions}>
                    <button className={styles.addButton} onClick={() => setShowModal(true)}>Add new</button>
                    <div className={styles.listInput}>
                        <input
                            className={styles.input}
                            type="text"
                            placeholder="Title"
                            value={searchTitle}
                            onChange={(e) => setSearchTitle(e.target.value)}
                        />
                        <input
                            className={styles.input}
                            type="text"
                            placeholder="Tags"
                            value={searchTag}
                            onChange={(e) => setSearchTag(e.target.value)}
                        />
                    </div>
                </div>

                <UserTable users={paginatedUsers} onEdit={(user) => setEditingUser(user)}
                    onDelete={(id) => handleDeleteUser(id)} />
                {showModal && (
                    <UserFormModal
                        onSubmit={handleSubmitUser}
                        onClose={() => {
                            setShowModal(false);
                            setEditingUser(null);
                        }}
                        initialData={editingUser || undefined}

                    />
                )}
                <div className={styles.pagination}>
                    {Array.from({ length: totalPages }).map((_, index) => (
                        <button
                            key={index}
                            className={`${styles.pageBtn} ${currentPage === index + 1 ? styles.active : ''}`}
                            onClick={() => setCurrentPage(index + 1)}
                        >
                            {index + 1}
                        </button>
                    ))}
                </div>
            </main>
        </div>
    );
};

export default ProfilePage;
