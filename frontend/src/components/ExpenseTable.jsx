function ExpenseTable({
  expenses,
  search,
  loading,
  onSearch,
  onEdit,
  onDelete,
}) {
  return (
    <section className="card expense-table-card">
      <div className="table-header">
        <div>
          <span className="section-label">TRANSACTION HISTORY</span>
          <h2>Recent Expenses</h2>
        </div>

        <div className="search-box">
          <span>⌕</span>

          <input
            type="search"
            aria-label="Search expenses"
            placeholder="Search expenses..."
            value={search}
            onChange={(event) => onSearch(event.target.value)}
          />
        </div>
      </div>

      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Category</th>
              <th>Description</th>
              <th>Amount</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {loading ? (
              <tr>
                <td colSpan="5" className="table-message">
                  Loading expenses...
                </td>
              </tr>
            ) : expenses.length > 0 ? (
              expenses.map((expense) => (
                <tr key={expense.id}>
                  <td>{expense.date}</td>

                  <td>
                    <span className="category-badge">
                      {expense.category}
                    </span>
                  </td>

                  <td>
                    {expense.description || "No description"}
                  </td>

                  <td className="amount-cell">
                    ₹{Number(expense.amount).toFixed(2)}
                  </td>

                  <td>
                    <div className="action-buttons">
                      <button
                        className="edit-button"
                        type="button"
                        onClick={() => onEdit(expense)}
                      >
                        Edit
                      </button>

                      <button
                        className="delete-button"
                        type="button"
                        onClick={() => onDelete(expense.id)}
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="table-message">
                  No expenses found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default ExpenseTable;