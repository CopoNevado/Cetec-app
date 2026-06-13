import "../styles/teamBuilder.css";

function TypeCoverageAnalysis({ analysis }) {
  if (!analysis) {
    return <div className="analysis-panel">Cargando análisis...</div>;
  }

  const getTypeColor = (type) => {
    const colors = {
      normal: "#A8A878",
      fire: "#F08030",
      water: "#6890F0",
      grass: "#78C850",
      electric: "#F8D030",
      ice: "#98D8D8",
      fighting: "#C03028",
      poison: "#A040A0",
      ground: "#E0C068",
      flying: "#A890F0",
      psychic: "#F85888",
      bug: "#A8B820",
      rock: "#B8A038",
      ghost: "#705898",
      dragon: "#7038F8",
      dark: "#705848",
      steel: "#B8B8D0",
      fairy: "#EE99AC"
    };
    return colors[type] || "#999";
  };

  return (
    <div className="analysis-panel">
      <h3 className="analysis-title">Análisis del Equipo</h3>

      {/* Balance Score */}
      <div className="analysis-section">
        <div className="balance-score">
          <div className="score-circle">
            <span className="score-value">{analysis.balanceScore}</span>
            <span className="score-max">/100</span>
          </div>
          <div className="score-label">Balance General</div>
        </div>
      </div>

      {/* Types Represented */}
      <div className="analysis-section">
        <h4 className="analysis-subtitle">Tipos Representados</h4>
        <div className="types-display-grid">
          {analysis.typesInTeam.map(type => (
            <span
              key={type}
              className="type-chip"
              style={{ backgroundColor: getTypeColor(type) }}
              title={type}
            >
              {type.slice(0, 4)}
            </span>
          ))}
        </div>
        <div className="diversity-info">
          Diversidad: {analysis.typeDiversity.toFixed(0)}%
        </div>
      </div>

      {/* Team Strengths */}
      <div className="analysis-section">
        <h4 className="analysis-subtitle strength">
          ✓ Fortalezas Ofensivas ({analysis.strengths.length})
        </h4>
        <div className="coverage-list">
          {analysis.strengths.length > 0 ? (
            analysis.strengths.map(type => (
              <span
                key={type}
                className="coverage-badge strength"
                style={{
                  borderColor: getTypeColor(type),
                  color: getTypeColor(type)
                }}
              >
                {type}
              </span>
            ))
          ) : (
            <span className="coverage-empty">Ninguna</span>
          )}
        </div>
      </div>

      {/* Team Weaknesses */}
      <div className="analysis-section">
        <h4 className="analysis-subtitle weakness">
          ✗ Debilidades Defensivas ({analysis.weaknesses.length})
        </h4>
        <div className="coverage-list">
          {analysis.weaknesses.length > 0 ? (
            analysis.weaknesses.map(type => (
              <span
                key={type}
                className="coverage-badge weakness"
                style={{
                  borderColor: getTypeColor(type),
                  color: getTypeColor(type)
                }}
              >
                {type}
              </span>
            ))
          ) : (
            <span className="coverage-empty">Ninguna</span>
          )}
        </div>
      </div>

      {/* Team Resistances */}
      <div className="analysis-section">
        <h4 className="analysis-subtitle resistance">
          ◆ Resistencias Defensivas ({analysis.resistances.length})
        </h4>
        <div className="coverage-list">
          {analysis.resistances.length > 0 ? (
            analysis.resistances.map(type => (
              <span
                key={type}
                className="coverage-badge resistance"
                style={{
                  borderColor: getTypeColor(type),
                  color: getTypeColor(type)
                }}
              >
                {type}
              </span>
            ))
          ) : (
            <span className="coverage-empty">Ninguna</span>
          )}
        </div>
      </div>

      {/* Coverage Summary */}
      <div className="analysis-section coverage-summary">
        <div className="summary-row">
          <span className="summary-label">Tipos únicos:</span>
          <span className="summary-value">{analysis.typesInTeam.length}/18</span>
        </div>
        <div className="summary-row">
          <span className="summary-label">Cobertura ofensiva:</span>
          <span className="summary-value">
            {analysis.strengths.length}/18
          </span>
        </div>
        <div className="summary-row">
          <span className="summary-label">Puntos débiles:</span>
          <span className="summary-value weakness">{analysis.weaknesses.length}/18</span>
        </div>
      </div>
    </div>
  );
}

export default TypeCoverageAnalysis;
