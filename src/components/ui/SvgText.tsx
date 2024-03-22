"use client";
import React from "react";
import { motion } from "framer-motion";

const strokeColor = "#6F93B8";
const svgVariants = {
	initial: {
		strokeDasharray: 100,
		strokeDashoffset: 100,
		strokeWidth: 2,
	},
	animate: {
		strokeDashoffset: 0,
		transition: { duration: 2 },
	},
};

export default function SvgText() {
	return (
		<div className="w-full h-screen mx-auto space-y-8 md:space-y-6 lg:space-y-3 flex flex-col items-center justify-center">
			<svg
				width="1200"
				height="130"
				viewBox="0 0 1365 115"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				className="w-full h-auto object-cover"
			>
				<motion.path
					pathLength={100}
					variants={svgVariants}
					initial="initial"
					animate="animate"
					d="M1362.67 3.79999V2.29999H1361.17H1327.87H1326.37V3.79999V110V111.5H1327.87H1361.17H1362.67V110V3.79999Z"
					stroke={strokeColor}
				/>
				<motion.path
					pathLength={100}
					variants={svgVariants}
					initial="initial"
					animate="animate"
					d="M1312.32 43.4V41.9H1310.82H1279.32V31.85H1315.32H1316.82V30.35V3.79999V2.29999H1315.32H1244.52H1243.02V3.79999V110V111.5H1244.52H1315.32H1316.82V110V83.45V81.95H1315.32H1279.32V69.95H1310.82H1312.32V68.45V43.4Z"
					stroke={strokeColor}
				/>
				<motion.path
					pathLength={100}
					variants={svgVariants}
					initial="initial"
					animate="animate"
					d="M1203.98 111.5H1205.48V110V3.79999V2.29999H1203.98H1170.68H1169.18V3.79999V53.0345L1136.69 2.98324L1136.25 2.29999H1135.43H1102.13H1100.63V3.79999V110V111.5H1102.13H1135.43H1136.93V110V61.5951L1169.43 110.826L1169.88 111.5H1170.68H1203.98Z"
					stroke={strokeColor}
				/>
				<motion.path
					pathLength={100}
					variants={svgVariants}
					initial="initial"
					animate="animate"
					d="M1088.59 3.79999V2.29999H1087.09H1053.79H1052.29V3.79999V110V111.5H1053.79H1087.09H1088.59V110V3.79999Z"
					stroke={strokeColor}
				/>
				<motion.path
					pathLength={100}
					variants={svgVariants}
					initial="initial"
					animate="animate"
					d="M1040.31 83.45V81.95H1038.81H999.283L1039.99 29.7727L1040.31 29.3659V28.85V3.79999V2.29999H1038.81H959.311H957.811V3.79999V30.2V31.7H959.311H998.269L958.12 84.037L957.811 84.4409V84.95V110V111.5H959.311H1038.81H1040.31V110V83.45Z"
					stroke={strokeColor}
				/>
				<motion.path
					pathLength={100}
					variants={svgVariants}
					initial="initial"
					animate="animate"
					d="M927.585 4.48699L928.712 2.29999H926.252H888.752H887.782L887.384 3.18421L871.802 37.7961L856.22 3.18421L855.822 2.29999H854.852H816.752H814.292L815.419 4.48699L853.352 78.1137V110V111.5H854.852H888.152H889.652V110V78.1137L927.585 4.48699Z"
					stroke={strokeColor}
				/>
				<motion.path
					pathLength={100}
					variants={svgVariants}
					initial="initial"
					animate="animate"
					d="M735.686 111.5H736.774L737.112 110.466L742.024 95.45H775.249L780.161 110.466L780.499 111.5H781.586H816.686H818.829L818.096 109.486L779.396 3.28641L779.036 2.29999H777.986H739.586H738.538L738.178 3.28466L699.328 109.485L698.59 111.5H700.736H735.686ZM751.101 67.4L758.636 44.2047L766.172 67.4H751.101Z"
					stroke={strokeColor}
				/>
				<motion.path
					pathLength={100}
					variants={svgVariants}
					initial="initial"
					animate="animate"
					d="M694.711 3.79999V2.29999H693.211H652.561H651.504L651.148 3.29485L629.742 63.147L607.769 3.28312L607.408 2.29999H606.361H565.561H564.061V3.79999V110V111.5H565.561H598.861H600.361V110V66.9919L613.777 110.443L614.104 111.5H615.211H643.711H644.817L645.144 110.443L658.561 66.9919V110V111.5H660.061H693.211H694.711V110V3.79999Z"
					stroke={strokeColor}
				/>
				<motion.path
					pathLength={100}
					variants={svgVariants}
					initial="initial"
					animate="animate"
					d="M529.091 75.05H530.392L530.576 73.7621C530.886 71.5863 531.041 69.3151 531.041 66.95C531.041 58.0369 529.144 50.2212 525.294 43.5573C521.551 36.906 516.239 31.8041 509.39 28.2728C502.645 24.6441 494.949 22.85 486.341 22.85C477.727 22.85 469.98 24.6463 463.138 28.2748L463.138 28.2748L463.129 28.2793C456.372 31.9178 451.068 37.1745 447.232 44.0165L447.232 44.0165L447.228 44.0232C443.484 50.7834 441.641 58.6927 441.641 67.7C441.641 76.708 443.485 84.6631 447.224 91.5183L447.23 91.5302L447.237 91.542C451.074 98.2833 456.378 103.485 463.129 107.121L463.138 107.125C469.98 110.754 477.727 112.55 486.341 112.55C493.539 112.55 500.157 111.161 506.174 108.36L506.184 108.355C512.269 105.467 517.303 101.583 521.256 96.695C525.307 91.7082 527.963 86.0854 529.212 79.8442L529.57 78.05H527.741H492.491H491.551L491.141 78.8956C490.439 80.3431 489.56 81.3467 488.537 81.996C487.515 82.6442 486.255 83 484.691 83C482.248 83 480.542 82.2228 479.354 80.8007C478.315 79.5565 477.557 77.6836 477.199 75.05H529.091ZM492.13 53.8523L492.15 53.8685L492.17 53.884C493.224 54.7038 493.924 55.8644 494.181 57.5H477.894C478.427 55.8284 479.242 54.6043 480.283 53.7439C481.664 52.6032 483.627 51.95 486.341 51.95C488.746 51.95 490.64 52.6106 492.13 53.8523Z"
					stroke={strokeColor}
				/>
				<motion.path
					pathLength={100}
					variants={svgVariants}
					initial="initial"
					animate="animate"
					d="M433.215 111.5H434.715V110V60.95C434.715 49.5758 431.635 40.3798 425.322 33.5375C419.074 26.657 410.28 23.3 399.165 23.3C393.105 23.3 387.539 24.8177 382.499 27.8601C378.186 30.3777 374.524 33.526 371.523 37.3026C368.746 33.1848 365.203 29.9248 360.902 27.5433C355.949 24.701 350.289 23.3 343.965 23.3C338.166 23.3 333.019 24.44 328.569 26.7712L328.562 26.7747L328.556 26.7782C325.645 28.3401 323.128 30.2476 321.015 32.5019V25.4V23.9H319.515H286.215H284.715V25.4V110V111.5H286.215H319.515H321.015V110V65.15C321.015 61.8548 321.965 59.4876 323.699 57.8362L323.713 57.8236L323.726 57.8107C325.479 56.0575 327.959 55.1 331.365 55.1C334.657 55.1 337.093 56.0498 338.854 57.8107L338.879 57.8359L338.906 57.8599C340.728 59.5166 341.715 61.876 341.715 65.15V110V111.5H343.215H376.365H377.865V110V65.15C377.865 61.8548 378.815 59.4876 380.549 57.8362L380.563 57.8236L380.576 57.8106C382.329 56.0575 384.809 55.1 388.215 55.1C391.507 55.1 393.943 56.0498 395.704 57.8107L395.729 57.8359L395.756 57.8599C397.578 59.5166 398.565 61.876 398.565 65.15V110V111.5H400.065H433.215Z"
					stroke={strokeColor}
				/>
				<motion.path
					pathLength={100}
					variants={svgVariants}
					initial="initial"
					animate="animate"
					d="M189.623 108.53L189.631 108.533C196.046 111.223 203.349 112.55 211.511 112.55C218.963 112.55 225.52 111.377 231.144 108.982C236.844 106.598 241.284 103.295 244.376 99.0304C247.464 94.7711 249.011 89.9621 249.011 84.65C249.011 78.0206 247.405 72.6324 244.005 68.6788C240.749 64.7958 236.885 62.0333 232.416 60.4374C228.125 58.9047 222.898 57.5374 216.751 56.3282L216.749 56.3279C212.186 55.4351 208.951 54.6083 206.975 53.8594C206.087 53.4753 205.538 53.0563 205.216 52.6575C204.91 52.2793 204.761 51.8634 204.761 51.35C204.761 50.4353 205.049 50.011 205.443 49.7481L205.489 49.7177L205.532 49.684C206.067 49.2678 206.988 48.95 208.511 48.95C210.975 48.95 212.756 49.5408 214.015 50.5642L214.038 50.5825L214.061 50.6C215.323 51.5465 216.208 52.9552 216.646 54.9686L216.902 56.15H218.111H247.661H249.394L249.146 54.4355C247.798 45.1025 243.734 37.4679 236.945 31.6171C230.19 25.7094 220.897 22.85 209.261 22.85C201.41 22.85 194.636 24.123 188.992 26.7339C183.373 29.233 179.033 32.7564 176.054 37.3315L176.054 37.3315L176.05 37.3388C173.187 41.7911 171.761 46.7749 171.761 52.25C171.761 58.4837 173.27 63.571 176.47 67.3234L176.478 67.333L176.487 67.3424C179.638 70.9137 183.295 73.4684 187.455 74.9618L187.455 74.9618L187.466 74.9658C191.556 76.3972 196.679 77.7133 202.819 78.9212C207.812 79.9199 211.254 80.8001 213.227 81.5517C214.099 81.8839 214.629 82.2831 214.94 82.6834C215.237 83.0658 215.411 83.5444 215.411 84.2C215.411 84.7562 215.192 85.2911 214.513 85.8477C213.846 86.2994 212.842 86.6 211.361 86.6C208.893 86.6 206.957 86.0552 205.46 85.0632C204.169 84.1446 203.292 82.6975 202.943 80.513L202.74 79.25H201.461H169.511H167.876L168.017 80.8788C168.542 86.9698 170.701 92.4461 174.48 97.2745C178.256 102.1 183.322 105.844 189.623 108.53Z"
					stroke={strokeColor}
				/>
				<motion.path
					pathLength={100}
					variants={svgVariants}
					initial="initial"
					animate="animate"
					d="M125.872 2.29999H124.579L124.388 3.57871L117.788 47.8287L117.532 49.55H119.272H141.172H142.187L142.565 48.6071L160.265 4.35707L161.087 2.29999H158.872H125.872Z"
					stroke={strokeColor}
				/>
				<motion.path
					pathLength={100}
					variants={svgVariants}
					initial="initial"
					animate="animate"
					d="M105.99 81.65V80.15H104.49H96.5398C94.5233 80.15 93.3772 79.7351 92.7733 79.2116C92.2914 78.7093 91.8898 77.7391 91.8898 75.95V54.65H104.19H105.69V53.15V25.4V23.9H104.19H91.8898V5V3.5H90.3898H57.0898H55.5898V5V23.9H46.5898H45.0898V25.4V53.15V54.65H46.5898H55.5898V75.35C55.5898 87.1329 58.5495 96.2452 64.7315 102.4C70.9122 108.555 80.0603 111.5 91.8898 111.5H104.49H105.99V110V81.65Z"
					stroke={strokeColor}
				/>
				<motion.path
					pathLength={100}
					variants={svgVariants}
					initial="initial"
					animate="animate"
					d="M38.3 3.79999V2.29999H36.8H3.5H2V3.79999V110V111.5H3.5H36.8H38.3V110V3.79999Z"
					stroke={strokeColor}
				/>
			</svg>
			<svg
				width="1200"
				height="110"
				viewBox="0 0 1371 140"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				className="w-full h-auto object-cover"
			>
				<motion.path
					pathLength={100}
					variants={svgVariants}
					initial="initial"
					animate="animate"
					d="M1256.1 135V136.5H1257.6H1292.75H1294.25V135V93.7699H1304.01L1326.32 135.704L1326.74 136.5H1327.64H1365.82H1368.34L1367.14 134.282L1341.59 87.379C1347.87 84.0916 1352.88 79.5674 1356.59 73.805C1360.9 67.15 1363.02 59.0345 1363.02 49.5398C1363.02 40.1317 1360.97 31.9698 1356.8 25.119C1352.64 18.2889 1346.81 13.0604 1339.36 9.44245C1331.91 5.8279 1323.27 4.04544 1313.48 4.04544H1257.6H1256.1V5.54544V135ZM1305.14 63.4631H1294.25V35.1108H1305.14C1309.14 35.1108 1312.46 35.6628 1315.15 36.7143L1315.16 36.7191L1315.17 36.7236C1317.86 37.7215 1319.84 39.263 1321.21 41.3276L1321.21 41.3406L1321.22 41.3533C1322.6 43.3521 1323.36 46.0409 1323.36 49.5398C1323.36 52.994 1322.61 55.6356 1321.23 57.5892L1321.23 57.5968L1321.22 57.6046C1319.86 59.5834 1317.89 61.0691 1315.19 62.0313C1312.49 62.971 1309.15 63.4631 1305.14 63.4631Z"
					stroke={strokeColor}
				/>
				<motion.path
					pathLength={100}
					variants={svgVariants}
					initial="initial"
					animate="animate"
					d="M1145.38 135V136.5H1146.88H1239.92H1241.42V135V106.682V105.182H1239.92H1183.52V85.9318H1235.37H1236.87V84.4318V56.1136V54.6136H1235.37H1183.52V35.3636H1240.17H1241.67V33.8636V5.54544V4.04544H1240.17H1146.88H1145.38V5.54544V135Z"
					stroke={strokeColor}
				/>
				<motion.path
					pathLength={100}
					variants={svgVariants}
					initial="initial"
					animate="animate"
					d="M1131.75 5.54544V4.04544H1130.25H1095.11H1093.61V5.54544V69.9173L1049.32 4.70274L1048.87 4.04544H1048.08H1018.24H1016.74V5.54544V135V136.5H1018.24H1053.39H1054.89V135V70.711L1099.69 135.85L1100.13 136.5H1100.92H1130.25H1131.75V135V5.54544Z"
					stroke={strokeColor}
				/>
				<motion.path
					pathLength={100}
					variants={svgVariants}
					initial="initial"
					animate="animate"
					d="M963.357 48.6329L963.637 49.7756H964.814H1000.34H1002L1001.83 48.1206C1001.13 41.4315 999.177 35.2659 995.95 29.6407C992.733 24.0319 988.495 19.1872 983.249 15.1107C978.044 10.9916 972.05 7.83664 965.283 5.63763C958.542 3.39146 951.26 2.27557 943.449 2.27557C934.554 2.27557 926.196 3.77992 918.386 6.79993C910.566 9.78128 903.67 14.2131 897.708 20.0882C891.73 25.9364 887.069 33.0914 883.712 41.5263L883.71 41.5325C880.384 49.9986 878.739 59.672 878.739 70.5256C878.739 84.3736 881.432 96.4058 886.881 106.569L886.883 106.573C892.366 116.718 900.003 124.555 909.781 130.05C919.562 135.546 930.884 138.27 943.702 138.27C955.194 138.27 965.441 136.017 974.405 131.471L974.408 131.469C983.421 126.876 990.502 120.275 995.622 111.685C1000.8 103.023 1003.35 92.6523 1003.35 80.6392V62.6875V61.1875H1001.85H944.46H942.96V62.6875V87.7188V89.2188H944.46H966.374C966.109 91.9516 965.323 94.3397 964.043 96.4121C962.459 98.9776 960.041 101.005 956.693 102.462L956.687 102.465C953.396 103.914 949.173 104.676 943.954 104.676C938.127 104.676 933.367 103.303 929.582 100.65C925.776 97.9815 922.868 94.1121 920.893 88.9524C918.911 83.774 917.895 77.4762 917.895 70.0199C917.895 62.6576 918.95 56.4557 921.007 51.3718C923.103 46.2944 926.092 42.4791 929.944 39.8446C933.827 37.2178 938.556 35.8693 944.207 35.8693C946.832 35.8693 949.202 36.1722 951.328 36.7628L951.344 36.7671L951.359 36.7711C953.522 37.3216 955.372 38.157 956.931 39.2602L956.948 39.2721L956.965 39.2836C958.578 40.3586 959.914 41.6768 960.983 43.243L960.988 43.2501L960.993 43.2572C962.055 44.7739 962.848 46.5586 963.357 48.6329Z"
					stroke={strokeColor}
				/>
				<motion.path
					pathLength={100}
					variants={svgVariants}
					initial="initial"
					animate="animate"
					d="M865.588 5.54544V4.04544H864.088H828.943H827.443V5.54544V135V136.5H828.943H864.088H865.588V135V5.54544Z"
					stroke={strokeColor}
				/>
				<motion.path
					pathLength={100}
					variants={svgVariants}
					initial="initial"
					animate="animate"
					d="M778.682 46.1196L778.792 47.5H780.177H813.805H815.312L815.305 45.9925C815.261 37.269 813.087 29.5831 808.739 22.992C804.438 16.3675 798.329 11.2609 790.473 7.65855C782.608 4.05171 773.346 2.27557 762.731 2.27557C752.322 2.27557 743.031 4.03211 734.887 7.5839L734.885 7.58508C726.791 11.1343 720.393 16.1181 715.75 22.5566L715.749 22.5582C711.124 28.9882 708.85 36.4862 708.893 44.9894C708.851 55.459 712.25 63.8792 719.192 70.0653L719.2 70.072C726.061 76.1024 735.358 80.3406 746.989 82.8636L746.991 82.864L759.881 85.6442C759.882 85.6443 759.883 85.6445 759.883 85.6447C764.641 86.6881 768.349 87.801 771.048 88.9689L771.056 88.9727L771.065 88.9763C773.777 90.1097 775.543 91.3365 776.543 92.5788L776.558 92.5966L776.573 92.614C777.6 93.8122 778.13 95.1945 778.171 96.8222C778.129 98.5889 777.569 100.136 776.474 101.513C775.381 102.888 773.721 104.036 771.38 104.894C769.068 105.742 766.116 106.193 762.478 106.193C758.164 106.193 754.52 105.521 751.505 104.23C748.549 102.946 746.301 101.085 744.706 98.6529C743.111 96.2234 742.178 93.1657 741.979 89.409L741.903 87.9886H740.481H707.106H705.6L705.606 89.4945C705.649 100.53 708.011 109.73 712.807 116.99L712.813 116.999C717.631 124.181 724.371 129.485 732.972 132.917L732.974 132.918C741.574 136.332 751.588 138.017 762.984 138.017C774.072 138.017 783.645 136.461 791.66 133.299C799.724 130.134 806.002 125.483 810.411 119.311C814.835 113.117 817.031 105.595 817.074 96.8285L817.074 96.8183L817.074 96.8082C817.031 91.724 816.205 86.9996 814.58 82.649C812.987 78.2713 810.49 74.3437 807.106 70.8719C803.718 67.352 799.394 64.3282 794.172 61.7817C788.936 59.2291 782.683 57.1936 775.434 55.6582C775.433 55.658 775.432 55.6578 775.431 55.6576L764.815 53.3827L764.815 53.3827L764.803 53.3801C761.775 52.758 759.192 52.0588 757.042 51.2883C754.893 50.5179 753.187 49.6867 751.89 48.8114C750.614 47.9091 749.744 46.964 749.204 45.9973C748.71 44.9962 748.481 43.8565 748.552 42.5412L748.554 42.5174L748.554 42.4936C748.59 40.8973 749.061 39.5148 749.965 38.2979C750.84 37.1202 752.25 36.1071 754.339 35.3335L754.346 35.3309L754.353 35.3282C756.441 34.5312 759.213 34.0994 762.731 34.0994C768.253 34.0994 772.071 35.2514 774.465 37.283L774.474 37.2901C776.942 39.3527 778.371 42.242 778.682 46.1196Z"
					stroke={strokeColor}
				/>
				<motion.path
					pathLength={100}
					variants={svgVariants}
					initial="initial"
					animate="animate"
					d="M598.164 135V136.5H599.664H692.71H694.21V135V106.682V105.182H692.71H636.309V85.9318H688.158H689.658V84.4318V56.1136V54.6136H688.158H636.309V35.3636H692.962H694.462V33.8636V5.54544V4.04544H692.962H599.664H598.164V5.54544V135Z"
					stroke={strokeColor}
				/>
				<motion.path
					pathLength={100}
					variants={svgVariants}
					initial="initial"
					animate="animate"
					d="M467.619 135V136.5H469.119H518.929C532.273 136.5 543.924 133.89 553.831 128.612L553.835 128.61C563.743 123.288 571.412 115.662 576.819 105.757L576.82 105.755C582.231 95.7987 584.903 83.9527 584.903 70.2727C584.903 56.5931 582.21 44.7666 576.755 34.8513C571.348 24.9024 563.634 17.2748 553.64 11.9959C543.689 6.67521 531.933 4.04544 518.423 4.04544H469.119H467.619V5.54544V135ZM533.416 100.701L533.412 100.704C529.147 102.657 523.915 103.665 517.665 103.665H505.764V36.8807H516.653C523.251 36.8807 528.718 37.8921 533.11 39.8482L533.114 39.8502C537.431 41.7557 540.721 45.0389 542.984 49.8041L542.989 49.8132C545.293 54.5797 546.505 61.3591 546.505 70.2727C546.505 79.1887 545.313 85.9718 543.048 90.7413L543.043 90.7506C540.816 95.5235 537.603 98.8019 533.416 100.701Z"
					stroke={strokeColor}
				/>
				<motion.path
					pathLength={100}
					variants={svgVariants}
					initial="initial"
					animate="animate"
					d="M313.26 135V136.5H314.76H375.694C385.256 136.5 393.574 134.892 400.601 131.619C407.601 128.358 413.053 123.848 416.891 118.07C420.775 112.287 422.706 105.694 422.706 98.338C422.706 92.0023 421.306 86.4181 418.449 81.6412C415.621 76.8704 411.81 73.1237 407.031 70.4233C403.627 68.4701 399.959 67.1612 396.036 66.4912C399.365 65.4081 402.398 63.9205 405.123 62.022L405.132 62.0155C409.066 59.2308 412.134 55.7684 414.313 51.6351C416.543 47.4839 417.649 42.8987 417.649 37.9091C417.649 31.0584 415.843 25.0372 412.189 19.9109C408.573 14.7788 403.234 10.8695 396.282 8.1321C389.354 5.38777 380.874 4.04544 370.89 4.04544H314.76H313.26V5.54544V135ZM375.414 82.6477L375.422 82.6512C377.752 83.6442 379.489 85.0661 380.7 86.9015C381.899 88.7176 382.538 90.9865 382.538 93.7869C382.538 97.7465 381.218 100.549 378.714 102.447C376.137 104.359 372.093 105.435 366.339 105.435H351.405V81.1278H366.845C370.281 81.1278 373.121 81.6541 375.414 82.6477ZM376.757 51.3755L376.753 51.3806C375.633 52.9346 374.039 54.1638 371.901 55.0421C369.755 55.9235 367.237 56.3835 364.317 56.3835H351.405V34.6051H364.822C368.954 34.6051 372.242 35.6146 374.794 37.5288L374.8 37.5331L374.806 37.5373C377.235 39.3232 378.493 41.8992 378.493 45.4943C378.493 47.884 377.891 49.8167 376.757 51.3755Z"
					stroke={strokeColor}
				/>
				<motion.path
					pathLength={100}
					variants={svgVariants}
					initial="initial"
					animate="animate"
					d="M202.531 135V136.5H204.031H297.077H298.577V135V106.682V105.182H297.077H240.676V85.9318H292.526H294.026V84.4318V56.1136V54.6136H292.526H240.676V35.3636H297.33H298.83V33.8636V5.54544V4.04544H297.33H204.031H202.531V5.54544V135Z"
					stroke={strokeColor}
				/>
				<motion.path
					pathLength={100}
					variants={svgVariants}
					initial="initial"
					animate="animate"
					d="M40.7744 135.424L41.0916 136.5H42.2131H75.8409H76.9525L77.276 135.437L98.3438 66.1793L119.412 135.437L119.735 136.5H120.847H154.474H155.596L155.913 135.424L194.092 5.96976L194.66 4.04544H192.653H153.463H152.259L151.999 5.22103L135.178 81.1557L115.218 5.16438L114.924 4.04544H113.767H82.9205H81.7645L81.47 5.16325L61.5099 80.9153L44.6887 5.22004L44.4277 4.04544H43.2245H4.03412H2.02786L2.59538 5.96975L40.7744 135.424Z"
					stroke={strokeColor}
				/>
			</svg>
			<svg
				width="1200"
				height="120"
				viewBox="0 0 1431 130"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				className="w-full h-auto object-cover"
			>
				<motion.path
					pathLength={100}
					variants={svgVariants}
					initial="initial"
					animate="animate"
					d="M1323.88 125V126.5H1325.38H1357.96H1359.46V125V86.8906H1368.34L1388.98 125.704L1389.4 126.5H1390.31H1425.7H1428.22L1427.01 124.283L1403.39 80.9023C1409.18 77.851 1413.81 73.662 1417.23 68.3338C1421.25 62.1435 1423.21 54.5989 1423.21 45.7813C1423.21 37.0441 1421.31 29.4578 1417.43 23.087C1413.56 16.737 1408.14 11.8764 1401.21 8.51384C1394.29 5.15474 1386.27 3.5 1377.18 3.5H1325.38H1323.88V5V125ZM1369.45 58.5781H1359.46V32.5156H1369.45C1373.14 32.5156 1376.21 33.0261 1378.68 33.9945L1378.7 33.9993L1378.71 34.0038C1381.18 34.9217 1383 36.337 1384.25 38.2292L1384.26 38.2422L1384.27 38.255C1385.53 40.0845 1386.23 42.5531 1386.23 45.7813C1386.23 48.9678 1385.53 51.3923 1384.27 53.1797L1384.27 53.1874L1384.26 53.1951C1383.02 55.0078 1381.21 56.3719 1378.73 57.2572C1376.24 58.123 1373.16 58.5781 1369.45 58.5781Z"
					stroke={strokeColor}
				/>
				<motion.path
					pathLength={100}
					variants={svgVariants}
					initial="initial"
					animate="animate"
					d="M1221.24 125V126.5H1222.74H1308.99H1310.49V125V98.75V97.25H1308.99H1256.82V79.625H1304.77H1306.27V78.125V51.875V50.375H1304.77H1256.82V32.75H1309.23H1310.73V31.25V5V3.5H1309.23H1222.74H1221.24V5V125Z"
					stroke={strokeColor}
				/>
				<motion.path
					pathLength={100}
					variants={svgVariants}
					initial="initial"
					animate="animate"
					d="M1112.96 125V126.5H1114.46H1147.04H1148.54V125V90.875H1165.09C1174.41 90.875 1182.64 89.1409 1189.72 85.6215C1196.83 82.1026 1202.39 77.0674 1206.33 70.5234C1210.32 63.963 1212.29 56.2429 1212.29 47.4219C1212.29 38.6827 1210.38 30.9724 1206.52 24.3423C1202.66 17.7261 1197.26 12.5893 1190.34 8.94606C1183.4 5.29831 1175.36 3.5 1166.26 3.5H1114.46H1112.96V5V125ZM1158.52 62.5625H1148.54V32.5156H1158.52C1162.18 32.5156 1165.21 33.1508 1167.65 34.3533L1167.66 34.3591L1167.67 34.3646C1170.15 35.533 1172 37.2076 1173.28 39.3924L1173.29 39.4046L1173.3 39.4167C1174.61 41.5574 1175.3 44.2027 1175.3 47.4219C1175.3 50.5968 1174.61 53.2721 1173.29 55.5037L1173.28 55.5112L1173.28 55.5188C1171.99 57.7482 1170.13 59.4829 1167.64 60.7267C1165.2 61.928 1162.18 62.5625 1158.52 62.5625Z"
					stroke={strokeColor}
				/>
				<motion.path
					pathLength={100}
					variants={svgVariants}
					initial="initial"
					animate="animate"
					d="M1092.9 99.5498L1092.9 99.5474C1098.25 90.0899 1100.89 78.5505 1100.89 65C1100.89 51.4498 1098.25 39.9286 1092.9 30.5088C1087.57 21.0969 1080.36 13.9544 1071.27 9.12575C1062.2 4.27362 1052.11 1.85938 1041.03 1.85938C1029.87 1.85938 1019.74 4.27295 1010.67 9.12626C1001.62 13.9558 994.425 21.0993 989.098 30.5112L989.097 30.513C983.784 39.9319 981.169 51.4515 981.169 65C981.169 78.4724 983.784 89.9706 989.095 99.426L989.099 99.4326C994.426 108.804 1001.62 115.963 1010.66 120.869L1010.67 120.873C1019.74 125.727 1029.87 128.141 1041.03 128.141C1052.11 128.141 1062.2 125.746 1071.26 120.934L1071.27 120.932C1080.36 116.065 1087.57 108.924 1092.9 99.5498ZM1061.6 47.3663L1061.6 47.3729L1061.6 47.3796C1063.43 52.0779 1064.37 57.9357 1064.37 65C1064.37 72.0637 1063.43 77.9429 1061.6 82.6827L1061.6 82.6887C1059.81 87.375 1057.19 90.8603 1053.77 93.2389C1050.4 95.5713 1046.18 96.7812 1041.03 96.7812C1035.88 96.7812 1031.64 95.5733 1028.23 93.2399C1024.85 90.8615 1022.22 87.3748 1020.4 82.6857C1018.61 77.9438 1017.68 72.0632 1017.68 65C1017.68 57.9344 1018.61 52.074 1020.4 47.373C1022.22 42.6397 1024.85 39.1565 1028.23 36.8197L1028.23 36.8178C1031.65 34.4458 1035.88 33.2187 1041.03 33.2187C1046.17 33.2187 1050.39 34.4459 1053.76 36.8136L1053.77 36.8188L1053.78 36.8239C1057.19 39.1602 1059.81 42.6397 1061.6 47.3663Z"
					stroke={strokeColor}
				/>
				<motion.path
					pathLength={100}
					variants={svgVariants}
					initial="initial"
					animate="animate"
					d="M892.048 125V126.5H893.548H974.642H976.142V125V98.75V97.25H974.642H927.626V5V3.5H926.126H893.548H892.048V5V125Z"
					stroke={strokeColor}
				/>
				<motion.path
					pathLength={100}
					variants={svgVariants}
					initial="initial"
					animate="animate"
					d="M789.406 125V126.5H790.906H877.156H878.656V125V98.75V97.25H877.156H824.984V79.625H872.938H874.438V78.125V51.875V50.375H872.938H824.984V32.75H877.391H878.891V31.25V5V3.5H877.391H790.906H789.406V5V125Z"
					stroke={strokeColor}
				/>
				<motion.path
					pathLength={100}
					variants={svgVariants}
					initial="initial"
					animate="animate"
					d="M693.836 4.58107L693.521 3.5H692.396H655.599H653.524L654.174 5.47017L693.784 125.47L694.124 126.5H695.208H739.739H740.824L741.164 125.47L780.773 5.47017L781.423 3.5H779.349H742.552H741.426L741.111 4.58107L717.474 85.8501L693.836 4.58107Z"
					stroke={strokeColor}
				/>
				<motion.path
					pathLength={100}
					variants={svgVariants}
					initial="initial"
					animate="animate"
					d="M555.441 125V126.5H556.941H643.191H644.691V125V98.75V97.25H643.191H591.02V79.625H638.973H640.473V78.125V51.875V50.375H638.973H591.02V32.75H643.426H644.926V31.25V5V3.5H643.426H556.941H555.441V5V125Z"
					stroke={strokeColor}
				/>
				<motion.path
					pathLength={100}
					variants={svgVariants}
					initial="initial"
					animate="animate"
					d="M434.431 125V126.5H435.931H482.103C494.487 126.5 505.305 124.078 514.507 119.175L514.512 119.173C523.714 114.23 530.839 107.145 535.861 97.9452L535.862 97.9428C540.888 88.6948 543.368 77.6951 543.368 65C543.368 52.3052 540.869 41.3235 535.802 32.113C530.779 22.872 523.613 15.7861 514.33 10.8826C505.087 5.94049 494.171 3.5 481.634 3.5H435.931H434.431V5V125ZM495.487 93.1067L495.482 93.1089C491.547 94.911 486.713 95.8438 480.931 95.8438H470.009V34.1562H479.993C486.099 34.1562 491.15 35.0923 495.203 36.8976L495.208 36.8996C499.183 38.6542 502.214 41.6774 504.302 46.0733L504.307 46.0824C506.432 50.4796 507.556 56.745 507.556 65C507.556 73.2573 506.451 79.5265 504.361 83.9267L504.357 83.936C502.302 88.3396 499.341 91.3579 495.487 93.1067Z"
					stroke={strokeColor}
				/>
				<motion.path
					pathLength={100}
					variants={svgVariants}
					initial="initial"
					animate="animate"
					d="M291.345 125V126.5H292.845H349.329C358.205 126.5 365.931 125.008 372.463 121.965C378.968 118.935 384.038 114.742 387.608 109.368C391.221 103.988 393.017 97.8542 393.017 91.0156C393.017 85.1261 391.715 79.9297 389.055 75.4821C386.424 71.0437 382.878 67.557 378.431 65.0444C375.388 63.2982 372.118 62.1058 368.63 61.4624C371.565 60.4681 374.248 59.1298 376.671 57.4418L376.68 57.4352C380.34 54.8444 383.196 51.6221 385.224 47.775C387.3 43.9101 388.329 39.6418 388.329 35C388.329 28.6294 386.65 23.0252 383.248 18.2529C379.881 13.4748 374.913 9.83928 368.453 7.29583C362.015 4.74539 354.139 3.5 344.876 3.5H292.845H291.345V5V125ZM349.026 76.5717L349.034 76.5752C351.176 77.4882 352.768 78.7932 353.878 80.4747C354.975 82.1369 355.563 84.2181 355.563 86.7969C355.563 90.4395 354.351 93.0018 352.062 94.7373C349.701 96.4889 345.98 97.4844 340.657 97.4844H326.923V75.1719H341.126C344.3 75.1719 346.918 75.6581 349.026 76.5717ZM350.225 47.4185L350.222 47.4236C349.197 48.8452 347.737 49.9729 345.771 50.7804C343.797 51.591 341.478 52.0156 338.782 52.0156H326.923V32.0469H339.251C343.063 32.0469 346.086 32.9779 348.429 34.7352L348.435 34.7394L348.441 34.7436C350.66 36.3756 351.813 38.7285 351.813 42.0312C351.813 44.2271 351.261 45.9952 350.225 47.4185Z"
					stroke={strokeColor}
				/>
				<motion.path
					pathLength={100}
					variants={svgVariants}
					initial="initial"
					animate="animate"
					d="M188.703 125V126.5H190.203H276.453H277.953V125V98.75V97.25H276.453H224.281V79.625H272.234H273.734V78.125V51.875V50.375H272.234H224.281V32.75H276.688H278.188V31.25V5V3.5H276.688H190.203H188.703V5V125Z"
					stroke={strokeColor}
				/>
				<motion.path
					pathLength={100}
					variants={svgVariants}
					initial="initial"
					animate="animate"
					d="M38.7644 125.424L39.0816 126.5H40.2031H71.375H72.4866L72.8101 125.437L92.2344 61.5819L111.659 125.437L111.982 126.5H113.094H144.266H145.387L145.704 125.424L181.095 5.42431L181.663 3.5H179.656H143.328H142.124L141.864 4.67559L126.369 74.6225L107.982 4.61894L107.688 3.5H106.531H77.9375H76.7815L76.487 4.61781L58.0997 74.4011L42.6049 4.6746L42.3439 3.5H41.1406H4.8125H2.80624L3.37377 5.42431L38.7644 125.424Z"
					stroke={strokeColor}
				/>
			</svg>
		</div>
	);
}
