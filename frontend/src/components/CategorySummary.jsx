function CategorySummary({ categories }) {
  const maxTotal = Math.max(
    ...categories.map((item) => Number(item.total)),
    1
  );

  return (
    <section className="card category-card">
      <div className="card-heading">
        <div>
          <span className="section-label">SPENDING BREAKDOWN</span>
          <h2>Category Summary</h2>
        </div>

        <div className="card-icon">◈</div>
      </div>

      {categories.length > 0 ? (
        <div className="category-list">
          {categories.map((item) => {
            const total = Number(item.total);
            const percentage = (total / maxTotal) * 100;

            return (
              <div className="category-item" key={item.category}>
                <div className="category-info">
                  <span>{item.category}</span>
                  <strong>₹{total.toFixed(2)}</strong>
                </div>

                <div className="category-bar">
                  <div
                    className="category-bar-fill"
                    style={{ width: `${percentage}%` }}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="empty-category">
          <span>◌</span>
          <p>No spending data available yet.</p>
          <small>Add an expense to see your breakdown.</small>
        </div>
      )}
    </section>
  );
}

export default CategorySummary;