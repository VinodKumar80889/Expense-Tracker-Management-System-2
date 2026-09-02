function StatsCard({ icon, label, value, accent }) {
  return (
    <div className={`stats-card stats-${accent}`}>
      <div className="stats-icon">{icon}</div>

      <div className="stats-content">
        <span>{label}</span>
        <strong>{value}</strong>
      </div>

      <div className="stats-shine"></div>
    </div>
  );
}

export default StatsCard;