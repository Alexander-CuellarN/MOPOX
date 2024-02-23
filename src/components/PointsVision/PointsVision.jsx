import "./PointsVision.css";

export function PointsVision({
  animationDuration,
  numberContent,
  textContent,
}) {
  return (
    <>
      <div className={`animationDuration_${animationDuration} visionItem `}>
        <div>
          <span>{numberContent}</span>
          <p>{textContent}</p>
        </div>
      </div>
    </>
  );
}
