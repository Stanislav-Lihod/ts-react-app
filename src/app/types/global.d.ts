declare module '*.less' {
	type ClassName = Record<string, string>;
	const resource: ClassName;
	export = resource;
}
declare module '*.svg' {
	import type React from 'react';
	const svg: React.FC<React.SVGAttributes<SVGSVGElement>>;
	export default svg;
}
declare module '*.jpg'
declare module '*.jpeg'
declare module '*.png'
declare module '*.webp'
declare module '*.gif'
