/** @jsx jsx */

import { jsx, Box } from 'theme-ui'
import Plx from 'react-plx'

const Juan = ({}) => {
	const opacity = [
		{
			start: '#message',
			end: '#subscribe',
			properties: [
				{
					startValue: 0,
					endValue: 1,
					property: 'opacity',
				},
				{
					startValue: 100,
					endValue: 10,
					unit: 'vh',
					property: 'translateY',
				},
			],
		},
		{
			start: '#subscribe',
			end: '#footer',
			properties: [
				{
					startValue: 1,
					endValue: 0,
					property: 'opacity',
				},
			],
		},
	]
	return (
		<Box
			sx={{
				position: 'fixed',
				bottom: 0,
				marginLeft: '-50%',
				transform: 'translateX(25%)',
				width: '100%',
				zIndex: -1,
			}}
		>
			<Plx
				parallaxData={opacity}
				sx={{ opacity: 0, transform: 'translateY(100vh)' }}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					xmlnsXlink="http://www.w3.org/1999/xlink"
					fill="none"
					viewBox="0 0 1600 1200"
				>
					<defs>
						<clipPath id="juan-clip">
							<path
								fill="#888B9B"
								fill-rule="evenodd"
								d="M1330.44 1193.45l4.56 4.55H439c5.32-9.11 16.19-27.55 17.1-28.46.57-.57 5.13-9.11 9.69-17.65s9.12-17.07 9.69-17.64c.91-.91 5.7-10.25 7.98-14.8l9.12-21.63 10.26-23.91 10.26-25.05c3.42-4.55 10.48-13.89 11.4-14.8.9-.91 2.66-5.69 3.42-7.97 3.04-3.79 9.34-11.61 10.26-12.52.9-.91 2.66-4.17 3.42-5.69l17.1-14.8c5.31-6.07 16.18-18.44 17.1-19.36.9-.9 9.5-7.2 13.67-10.24l19.38-10.25c4.94-1.51 16.19-5 21.66-6.83 3.03-1 8.73-2.46 14.25-3.87 6.96-1.77 13.62-3.46 14.25-4.1 1.14-1.13 5.7-2.27 6.84-2.27h11.4c.47 0 1.53-.4 2.77-.85 1.76-.65 3.87-1.43 5.2-1.43 1.35 0 6.2-.4 10.22-.72 2.85-.22 5.28-.42 5.75-.42.91 0 13.3-1.52 19.38-2.28l68.4-5.69 13.67-15.94v-7.97l-2.28-4.55-3.42-9.1a93.3 93.3 0 00-2.28-9.11c-.38-1.14-.88-2.53-1.39-3.93-1.01-2.78-2.03-5.56-2.03-6.32 0-.91-1.52-11.76-2.28-17.08l-2.28-5.69c-.76-2.66-2.5-7.97-3.41-7.97-.92 0-4.18-6.83-5.7-10.24l-3.43-10.25V804.1l1.14-14.8 5.7-10.25 7.98-7.97c3.42-1.9 10.5-5.7 11.4-5.7.92 0 4.18-2.27 5.7-3.4a87.32 87.32 0 014.56-5.7c.91-.9 4.94-3.41 6.84-4.55l6.84-5.7c3.04-2.65 9.35-7.96 10.26-7.96.91 0 .38-3.8 0-5.7l4.56-6.83 1.14-7.96 7.98-6.84 6.84-6.83c3.42-1.51 10.49-4.55 11.4-4.55.91 0 1.14-3.04 1.14-4.55l9.12-9.11-2.28-12.53c-.91-10.01 4.94-14.04 7.98-14.8-6.38-6.37-4.94-14.8-3.42-18.21 1.82-4.55 17.48-23.15 25.08-31.88v-3.41l11.4-9.1h6.84c9.12.9 21.28 9.48 26.22 13.65l4.56 1.14 7.98-1.14c8.2 1.82 26.98-3.8 35.33-6.83 3.05-1.52 14.82-5.24 37.62-7.97 22.8-2.73 47.5 4.18 57 7.97 6.46 1.9 21.2 5.47 28.5 4.55 7.3-.9 14.44 3.42 17.1 5.7l18.24 12.52 14.82 10.25c1.52 3.8 6.15 12.75 12.54 18.21 7.98 6.83 19.38 20.5 18.24 22.77 8.2 2.73 18.62 16.32 22.79 22.77l7.98 6.83c0 2.28.92 8.88 4.56 17.08 2.89 6.48 2.12 9.32 1.17 12.84-.55 2.04-1.17 4.3-1.17 7.65 0 7.28-3.04 18.97-4.56 23.9l4.56 13.67 3.42 13.66-3.42 22.77v13.66l-4.56 18.22-10.25 18.21-20.52 26.18-18.24 13.67c-3.04 2.27-9.81 6.83-12.54 6.83-2.68 0-8.84 6.96-12.49 11.08a74.46 74.46 0 01-2.33 2.58c-1.67 1.66-3.95 2.72-6.84 4.06-1.06.5-2.2 1.02-3.42 1.63-3.65 1.82-11.4 6.83-14.82 9.1l-14.82 15.94-9.12 4.56-14.82 5.7-15.96 3.4c4.56 11.4 36.48 28.47 54.72 36.44 18.24 7.97 47.88 29.6 52.44 35.29 4.56 5.69 36.48 29.6 44.45 35.29a121.33 121.33 0 0125.08 23.91l2.51 3.23c6.74 8.72 12.16 15.72 20.29 21.81 3.97 2.98 6 5.73 7.86 8.27 2.43 3.3 4.59 6.24 10.38 8.81 8.21 3.64 20.9 22.01 26.22 30.74l11.4 12.52v4.56zm-402.4-547.6l-20.52-31.87c-5.32 5.69-16.87 18.67-20.52 25.04-3.64 6.38-3.8 11-3.42 12.52l4.56 5.7h4.56l20.52-6.83 14.82-4.56zm-4.56-40.98c5.7.38 18.01 3.64 21.66 13.66l-6.84 12.52-14.82-26.18z"
								clip-rule="evenodd"
							/>
						</clipPath>
					</defs>
					<path
						fill="#344DB5"
						d="M300 797h136v136H300zM1204 977h220v220h-220z"
						opacity=".38"
					/>
					<path fill="#395DED" d="M1384 913h40v40h-40z" opacity=".2" />
					<path fill="#FFC90A" d="M114 1033h24v24h-24z" />
					<path fill="#395DED" d="M138 307h24v24h-24z" opacity=".2" />
					<path fill="#395DED" d="M436 933h264v264H436z" />
					<path fill="#FFC90A" d="M1390 1h24v26h-24z" />
					<image
						xlinkHref="/images/2020/juan-up.jpg"
						clipPath="url(#juan-clip)"
						x="439"
						y="594"
						width="896"
						height="604"
					/>
					<path fill="#395DED" d="M1424 953h24v24h-24z" />
					<g fill="#C4C4C4" opacity=".1">
						<path d="M1424 661h8v8h-8zM1480 661h8v8h-8zM1536 661h8v8h-8zM1452 661h8v8h-8zM1508 661h8v8h-8zM1564 661h8v8h-8zM1424 717h8v8h-8zM1480 717h8v8h-8zM1536 717h8v8h-8zM1452 717h8v8h-8zM1508 717h8v8h-8zM1564 717h8v8h-8zM1424 773h8v8h-8zM1480 773h8v8h-8zM1536 773h8v8h-8zM1452 773h8v8h-8zM1508 773h8v8h-8zM1564 773h8v8h-8zM1424 689h8v8h-8zM1480 689h8v8h-8zM1536 689h8v8h-8zM1452 689h8v8h-8zM1508 689h8v8h-8zM1564 689h8v8h-8zM1424 745h8v8h-8zM1480 745h8v8h-8zM1536 745h8v8h-8zM1452 745h8v8h-8zM1508 745h8v8h-8zM1564 745h8v8h-8zM1424 801h8v8h-8zM1480 801h8v8h-8zM1536 801h8v8h-8zM1452 801h8v8h-8zM1508 801h8v8h-8zM1564 801h8v8h-8z" />
					</g>
					<g fill="#C4C4C4" opacity=".1">
						<path d="M232 891h6v6h-6zM284 891h6v6h-6zM336 891h6v6h-6zM258 891h6v6h-6zM310 891h6v6h-6zM362 891h6v6h-6zM232 943h6v6h-6zM284 943h6v6h-6zM336 943h6v6h-6zM258 943h6v6h-6zM310 943h6v6h-6zM362 943h6v6h-6zM232 995h6v6h-6zM284 995h6v6h-6zM336 995h6v6h-6zM258 995h6v6h-6zM310 995h6v6h-6zM362 995h6v6h-6zM232 917h6v6h-6zM284 917h6v6h-6zM336 917h6v6h-6zM258 917h6v6h-6zM310 917h6v6h-6zM362 917h6v6h-6zM232 969h6v6h-6zM284 969h6v6h-6zM336 969h6v6h-6zM258 969h6v6h-6zM310 969h6v6h-6zM362 969h6v6h-6zM232 1021h6v6h-6zM284 1021h6v6h-6zM336 1021h6v6h-6zM258 1021h6v6h-6zM310 1021h6v6h-6zM362 1021h6v6h-6z" />
					</g>
				</svg>
			</Plx>
		</Box>
	)
}

export default Juan
