/// <reference types="react" />

declare module '*.jpg' {
	const content: any;
	export default content;
}

declare module '*.md' {
	const content: React.ComponentType;
	export default content;
}

declare module '*.mdx' {
	const content: React.ComponentType;
	export default content;
}
