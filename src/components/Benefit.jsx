// src/components/Benefit.jsx
function Benefit({ num, title, text, className }) {
    return (
      <div className={`benefit ${className}`}>
        <div className="big-num">{num}</div>
        <div className="benefit--content">
          <div className="line"></div>
          <h2 className="benefit--content---title">{title}</h2>
          <p className="benefit--content---text">{text}</p>
        </div>

      </div>
    );
  }
  
  export default Benefit;
  
  