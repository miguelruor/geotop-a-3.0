export const RightIcon = ({ size = 20, classes = '' }) => {
	return (
		<>
			<svg
				xmlns='http://www.w3.org/2000/svg'
				width={size}
				height={size}
				viewBox='0 0 24 24'
				fill='none'
				stroke='currentColor'
				strokeWidth='2'
				strokeLinecap='round'
				strokeLinejoin='round'
				className={`${classes}`}
			>
				<polyline points='9 18 15 12 9 6' />
			</svg>
		</>
	);
};

export const LeftIcon = ({ size = 20, classes = '' }) => {
	return (
		<>
			<svg
				xmlns='http://www.w3.org/2000/svg'
				width={size}
				height={size}
				viewBox='0 0 24 24'
				fill='none'
				stroke='currentColor'
				strokeWidth='2'
				strokeLinecap='round'
				strokeLinejoin='round'
				className={`${classes}`}
			>
				<polyline points='15 18 9 12 15 6' />{' '}
			</svg>
		</>
	);
};
