import { User } from '../types';
import styles from './UserTable.module.scss';
import editIcon from '../../../assets/images/common/edit-icon.svg';
import deleteIcon from '../../../assets/images/common/delete-icon.svg';
interface UserTableProps {
  users: User[];
  onEdit: (user: User) => void;
  onDelete: (id: number) => void;
}

const UserTable = ({ users, onEdit, onDelete }: UserTableProps) => {
    return (
        <div className={styles.tableWrapper}>
            <table className={styles.tableHeader}>
                <thead>
                    <tr>
                        <th style={{ width: '10%' }}>ID</th>
                        <th style={{ width: '20%' }}>Title</th>
                        <th style={{ width: '30%' }}>Description</th>
                        <th style={{ width: '25%' }}>Tags</th>
                        <th style={{ width: '15%' }}>Actions</th>
                    </tr>
                </thead>
            </table>

            <table className={styles.tableBody}>
                <tbody>
                    {users.map(user => (
                        <tr key={user.id}>
                            <td style={{ width: '10%' }}>{user.id}</td>
                            <td style={{ width: '20%' }}>{user.title}</td>
                            <td style={{ width: '30%' }}>{user.description}</td>
                            <td style={{ width: '25%' }}>{user.tags.join(', ')}</td>
                            <td>
                                <button className={styles.iconBtn}>
                                    <img src={editIcon} alt="Edit" />
                                </button>
                                <button className={styles.iconBtn}>
                                    <img src={deleteIcon} alt="Delete" />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

    );
};

export default UserTable;
