type CircleIconType = {
  className?: string;
  color?: string;
  width?: string;
  height?: string;
};

export default function CircleIcon({
  className,
  color,
  width,
  height,
}: CircleIconType) {
  return (
    <svg
      className={className}
      width={width || "13"}
      height={height || "13"}
      viewBox="0 0 13 13"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.5 0C2.91594 0 0 2.91594 0 6.5C0 10.0841 2.91594 13 6.5 13C10.0841 13 13 10.0841 13 6.5C13 2.91594 10.0841 0 6.5 0ZM9.88281 4.32156L5.68281 9.32156C5.63674 9.37644 5.57941 9.42077 5.51471 9.45156C5.45001 9.48234 5.37945 9.49886 5.30781 9.5H5.29938C5.22929 9.49997 5.16 9.48522 5.09599 9.45668C5.03198 9.42815 4.97468 9.38648 4.92781 9.33438L3.12781 7.33438C3.0821 7.28589 3.04654 7.22876 3.02322 7.16633C2.9999 7.10391 2.9893 7.03745 2.99203 6.97087C2.99477 6.90429 3.01078 6.83892 3.03914 6.77862C3.06749 6.71831 3.10761 6.66429 3.15715 6.61971C3.20668 6.57514 3.26463 6.54091 3.32757 6.51905C3.39052 6.49719 3.45721 6.48813 3.52371 6.4924C3.59021 6.49668 3.65518 6.51421 3.71481 6.54396C3.77444 6.5737 3.82752 6.61507 3.87094 6.66562L5.28625 8.23812L9.11719 3.67844C9.20312 3.57909 9.3247 3.51754 9.45564 3.50711C9.58658 3.49668 9.71637 3.53819 9.81695 3.62268C9.91753 3.70717 9.98083 3.82784 9.99315 3.95862C10.0055 4.0894 9.96584 4.21977 9.88281 4.32156Z"
        fill={color}
      />
    </svg>
  );
}