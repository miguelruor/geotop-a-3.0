export const SPECIAL_LECTURE_LABEL = "GEOTOP-H special lecture";

const badgeStyles = {
  display: "inline-block",
  padding: "0.3rem 0.75rem",
  borderRadius: "999px",
  border: "1px solid #a7c4d8",
  background: "linear-gradient(135deg, #eef6fb 0%, #dcecf7 100%)",
  color: "#2d5873",
  fontSize: "0.76rem",
  fontWeight: 700,
  lineHeight: 1.25,
  boxShadow: "0 3px 10px rgba(45, 88, 115, 0.12)",
  marginTop: "0.45rem",
};

export default function SpecialLectureLabel({size = "small"}) {
  const large = size == "large";
  const styles = {
    ...badgeStyles,
    padding: large ? "0.65rem 1.2 rem" : badgeStyles.padding,
    fontSize: large ? "1rem" : badgeStyles.fontSize,
    borderWidth: large ? "2px" : "1px",
    marginTop: large ? "0.8rem" : badgeStyles.marginTop,
  };

  return (
    <span style={styles}>
      {SPECIAL_LECTURE_LABEL}
    </span>
  );
}
