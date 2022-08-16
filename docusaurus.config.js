// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
	title: "Atri Labs",
	tagline: "Build better apps faster",
	url: "https://docs.atrilabs.com",
	baseUrl: "/",
	onBrokenLinks: "throw",
	onBrokenMarkdownLinks: "warn",
	favicon: "img/favicon.ico",

	// GitHub pages deployment config.
	// If you aren't using GitHub pages, you don't need these.
	organizationName: "Atri-Labs", // Usually your GitHub org/user name.
	projectName: "framework-docs", // Usually your repo name.
	deploymentBranch: "gh-pages",

	// Even if you don't use internalization, you can use this field to set useful
	// metadata like html lang. For example, if your site is Chinese, you may want
	// to replace "en" with "zh-Hans".
	i18n: {
		defaultLocale: "en",
		locales: ["en"],
	},

	presets: [
		[
			"classic",
			/** @type {import('@docusaurus/preset-classic').Options} */
			({
				docs: {
					sidebarPath: require.resolve("./sidebars.js"),
					// Please change this to your repo.
					// Remove this to remove the "edit this page" links.
					editUrl:
						"https://github.com/Atri-Labs/framework-docs/tree/main/",
					routeBasePath: "/",
				},
				blog: {
					showReadingTime: true,
					// Please change this to your repo.
					// Remove this to remove the "edit this page" links.
					editUrl:
						"https://github.com/Atri-Labs/framework-docs/tree/main/",
				},
				pages: {
					routeBasePath: "/pages",
				},
				theme: {
					customCss: require.resolve("./src/css/custom.css"),
				},
			}),
		],
	],

	themeConfig:
		/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
		({
			navbar: {
				title: "Atri Labs",
				logo: {
					alt: "Atri Labs Logo",
					src: "img/logo.svg",
				},
				items: [
					{
						type: "doc",
						docId: "intro",
						position: "left",
						label: "Docs",
					},
					{ to: "/blog", label: "Blog", position: "left" },
					{
						href: "https://github.com/Atri-Labs/atrilabs-engine",
						label: "GitHub",
						position: "right",
					},
				],
			},
			footer: {
				style: "dark",
				links: [
					{
						title: "Community",
						items: [
							{
								label: "Stack Overflow",
								href: "https://stackoverflow.com/questions/tagged/atri",
							},
							{
								label: "Slack",
								href: "https://discordapp.com/invite/docusaurus",
							},
							{
								label: "Linkedin",
								href: "https://www.linkedin.com/company/atri-labs",
							},
						],
					},
					{
						title: "More",
						items: [
							{
								label: "Blog",
								to: "/blog",
							},
							{
								label: "GitHub",
								href: "https://github.com/Atri-Labs/atrilabs-engine",
							},
						],
					},
				],
				copyright: `Copyright © ${new Date().getFullYear()} Pulastya, Inc.`,
			},
			prism: {
				theme: lightCodeTheme,
				darkTheme: darkCodeTheme,
			},
			imageZoom: {
				// CSS selector to apply the plugin to, defaults to '.markdown img'
				selector: '.markdown img',
				// Optional medium-zoom options
				// see: https://www.npmjs.com/package/medium-zoom#options
				options: {
				  margin: 24,
				  background: '#BADA55',
				  scrollOffset: 0,
				  container: '#zoom-container',
				  template: '#zoom-template',
				},
			  },
		}),
	plugins:
	['plugin-image-zoom'],
};

module.exports = config;
