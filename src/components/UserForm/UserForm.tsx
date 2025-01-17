

const UserForm = () => {
    return (
        <form>
            <h4>Add new user</h4>
            <hr/>
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-control"
                />
            </div>

            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-control"
                />
            </div>

            <div className="form-group">
                <label htmlFor="isActive">Active</label>
                <input
                    type="checkbox"
                    id="isActive"
                    name="isActive"
                    className="form-control"
                />
            </div>

            <div className="form-group">
                <label htmlFor="role">Role</label>
                <select id="role" name="role" className="form-control">
                    <option value="user">User</option>
                    <option value="editor">Editor</option>
                    <option value="admin">Admin</option>
                </select>
            </div>

            <button type="submit" className="btn btn-primary mt-4">Submit</button>
        </form>
    );
};

export default UserForm;