// Make sure the shape of this data stays consistent
// Also ensure that the id starts at 0 and increases by 1
// Note that the fontawesome icons must be manually added as an svg in /static/images/icons

import { withPrefix } from 'gatsby'

const imageDir = 'images/headshots'

const teamMembers = [
	{
		id: 1,
		name: 'Juan Anton',
		imageUrl: withPrefix(`${imageDir}/anton-juan.jpg`),
		imageHoverUrl: withPrefix(`${imageDir}/anton-juan-h.jpg`),
		title: 'Senior UX Designer',
		icon: 'fa_palette',
		page: '/team/anton-juan',
	},
	{
		id: 10,
		name: 'David Aragones',
		imageUrl: withPrefix(`${imageDir}/aragones-david.jpg`),
		imageHoverUrl: withPrefix(`${imageDir}/aragones-david-h.jpg`),
		title: 'Senior UX Designer',
		icon: 'fa_universal_access',
		page: '/team/aragones-david',
	},
	{
		id: 11,
		name: 'Duuriimaa Bargaid',
		imageUrl: withPrefix(`${imageDir}/bargaid-duuriimaa.jpg`),
		imageHoverUrl: withPrefix(`${imageDir}/bargaid-duuriimaa-h.jpg`),
		title: 'Associate UX Designer',
		icon: 'fa_drum',
		page: '/team/bargaid-duuriimaa',
	},
	{
		id: 20,
		name: 'Julia Chan',
		imageUrl: withPrefix(`${imageDir}/chan-julia.jpg`),
		imageHoverUrl: withPrefix(`${imageDir}/chan-julia-h.jpg`),
		title: 'Graphic Designer',
		icon: 'fa_coffee',
		page: 'null',
	},
	{
		id: 30,
		name: 'Andrea Censi',
		imageUrl: withPrefix(`${imageDir}/censi-andrea.jpg`),
		imageHoverUrl: withPrefix(`${imageDir}/censi-andrea-h.jpg`),
		title: 'UX Designer',
		icon: 'fa_headphones_alt',
		page: 'null',
	},
	{
		id: 30,
		name: 'Emiliano Cicero',
		imageUrl: withPrefix(`${imageDir}/cicero-emiliano.jpg`),
		imageHoverUrl: withPrefix(`${imageDir}/cicero-emiliano-h.jpg`),
		title: 'UX Designer',
		icon: 'fa_bezier_curve',
		page: 'null',
	},
	{
		id: 40,
		name: 'Ryan Connolly',
		imageUrl: withPrefix(`${imageDir}/connolly-ryan.jpg`),
		imageHoverUrl: withPrefix(`${imageDir}/connolly-ryan-h.jpg`),
		title: 'UX Design Manager',
		icon: 'fa_pen',
		page: '/team/connolly-ryan',
	},
	{
		id: 50,
		name: 'Jadson Dantas',
		imageUrl: withPrefix(`${imageDir}/dantas-jadson.jpg`),
		imageHoverUrl: withPrefix(`${imageDir}/dantas-jadson-h.jpg`),
		title: 'UX Designer',
		icon: 'fa_music',
		page: 'null',
	},
	{
		id: 60,
		name: 'Vitor Fernandes',
		imageUrl: withPrefix(`${imageDir}/fernandes-vitor.jpg`),
		imageHoverUrl: withPrefix(`${imageDir}/fernandes-vitor-h.jpg`),
		title: 'UX Design Manager',
		icon: 'fa_rocket',
		page: 'null',
	},
	{
		id: 70,
		name: 'Rafael Fernandes',
		imageUrl: withPrefix(`${imageDir}/fernandes-rafael.jpg`),
		imageHoverUrl: withPrefix(`${imageDir}/fernandes-rafael-h.jpg`),
		title: 'Senior UX Designer',
		icon: 'fa_headphones_alt',
		page: 'null',
	},
	{
		id: 80,
		name: 'Markus Hammer',
		imageUrl: withPrefix(`${imageDir}/hammer-markus.jpg`),
		imageHoverUrl: withPrefix(`${imageDir}/hammer-markus-h.jpg`),
		title: 'Senior Graphic Designer',
		icon: 'fa_gavel',
		page: 'null',
	},
	{
		id: 90,
		name: 'Paul Hanaoka',
		imageUrl: withPrefix(`${imageDir}/hanaoka-paul.jpg`),
		imageHoverUrl: withPrefix(`${imageDir}/hanaoka-paul-h.jpg`),
		title: 'UX Design Manager',
		icon: 'fa_terminal',
		page: '/team/hanaoka-paul',
	},
	{
		id: 100,
		name: 'Abel Hancock',
		imageUrl: withPrefix(`${imageDir}/hancock-abel.jpg`),
		imageHoverUrl: withPrefix(`${imageDir}/hancock-abel-h.jpg`),
		title: 'UX Designer',
		icon: 'fa_code',
		page: '/team/hancock-abel',
	},
	{
		id: 110,
		name: 'Juan Hidalgo',
		imageUrl: withPrefix(`${imageDir}/hidalgo-juan.jpg`),
		imageHoverUrl: withPrefix(`${imageDir}/hidalgo-juan-h.jpg`),
		title: 'UX Director',
		icon: 'fa_heart',
		page: '/team/hidalgo-juan',
	},
	{
		id: 114,
		name: 'Andras Himer',
		imageUrl: withPrefix(`${imageDir}/-nerd-face.png`),
		imageHoverUrl: withPrefix(`${imageDir}/-heart-eyes-cat.png`),
		title: 'UX Designer',
		icon: 'fa_heart',
		page: 'null',
	},
	{
		id: 120,
		name: 'Naoki Hisamoto',
		imageUrl: withPrefix(`${imageDir}/hisamoto-naoki.jpg`),
		imageHoverUrl: withPrefix(`${imageDir}/hisamoto-naoki-h.jpg`),
		title: 'Graphic Designer',
		icon: 'fa_check_double',
		page: 'null',
	},
	{
		id: 130,
		name: 'Bryan Ho',
		imageUrl: withPrefix(`${imageDir}/ho-bryan.jpg`),
		imageHoverUrl: withPrefix(`${imageDir}/ho-bryan-h.jpg`),
		title: 'Associate Graphic Design Manager',
		icon: 'fa_pencil_alt',
		page: 'null',
	},
	{
		id: 140,
		name: 'Chris Jeong',
		imageUrl: withPrefix(`${imageDir}/jeong-chris.jpg`),
		imageHoverUrl: withPrefix(`${imageDir}/jeong-chris-h.jpg`),
		title: 'UX Designer',
		icon: 'fa_glasses',
		page: '/team/jeong-chris',
	},
	{
		id: 150,
		name: 'David Kim',
		imageUrl: withPrefix(`${imageDir}/kim-david.jpg`),
		imageHoverUrl: withPrefix(`${imageDir}/kim-david-h.jpg`),
		title: 'UX Designer',
		icon: 'fa_pastafarianism',
		page: '/team/kim-david',
	},
	{
		id: 170,
		name: 'Jessica Lee',
		imageUrl: withPrefix(`${imageDir}/lee-jessica.jpg`),
		imageHoverUrl: withPrefix(`${imageDir}/lee-jessica-h.jpg`),
		title: 'Graphic Designer',
		icon: 'fa_pen_nib',
		page: 'null',
	},
	{
		id: 180,
		name: 'James Lyons',
		imageUrl: withPrefix(`${imageDir}/lyons-james.jpg`),
		imageHoverUrl: withPrefix(`${imageDir}/lyons-james-h.jpg`),
		title: 'UX Designer',
		icon: 'fa_drum',
		page: '/team/lyons-james',
	},
	{
		id: 185,
		name: 'Miriam Manso',
		imageUrl: withPrefix(`${imageDir}/manso-miriam.jpg`),
		imageHoverUrl: withPrefix(`${imageDir}/manso-miriam-h.jpg`),
		title: 'Associate UX Designer',
		icon: 'fa_pointe_shoe',
		page: '/team/manso-miriam',
	},
	{
		id: 190,
		name: 'Nathalia Moura',
		imageUrl: withPrefix(`${imageDir}/moura-nathalia.jpg`),
		imageHoverUrl: withPrefix(`${imageDir}/moura-nathalia-h.jpg`),
		title: 'UX Designer',
		icon: 'fa_map_marked_alt',
		page: 'null',
	},
	{
		id: 210,
		name: 'Patrick Pentz',
		imageUrl: withPrefix(`${imageDir}/pentz-patrick.jpg`),
		imageHoverUrl: withPrefix(`${imageDir}/pentz-patrick-h.jpg`),
		title: 'UX Designer',
		icon: 'fa_camera',
		page: 'null',
	},
	{
		id: 220,
		name: 'Felipe Pires',
		imageUrl: withPrefix(`${imageDir}/pires-felipe.jpg`),
		imageHoverUrl: withPrefix(`${imageDir}/pires-felipe-h.jpg`),
		title: 'UX Design Manager',
		icon: 'fa_dumbbell',
		page: 'null',
	},
	// {
	// 	id: 230,
	// 	name: 'Davi Shamá',
	// 	imageUrl: withPrefix(`${imageDir}/shama-davi.jpg`),
	// 	imageHoverUrl: withPrefix(`${imageDir}/shama-davi-h.jpg`),
	// 	title: 'Associate UX Designer',
	// 	icon: 'fa_pencil_ruler',
	// 	page: 'null',
	// },
	{
		id: 250,
		name: 'Victor Valle',
		imageUrl: withPrefix(`${imageDir}/valle-victor.jpg`),
		imageHoverUrl: withPrefix(`${imageDir}/valle-victor-h.jpg`),
		title: 'UX Design Manager',
		icon: 'fa_fingerprint',
		page: '/team/valle-victor',
	},
	{
		id: 260,
		name: 'Susana Vázquez',
		imageUrl: withPrefix(`${imageDir}/vazquez-susana.jpg`),
		imageHoverUrl: withPrefix(`${imageDir}/vazquez-susana-h.jpg`),
		title: 'UX Designer',
		icon: 'fa_archway',
		page: '/team/vazquez-susana',
	},
	{
		id: 270,
		name: 'Sharon Wong',
		imageUrl: withPrefix(`${imageDir}/wong-sharon.jpg`),
		imageHoverUrl: withPrefix(`${imageDir}/wong-sharon-h.jpg`),
		title: 'Graphic Designer',
		icon: 'fa_pen_fancy',
		page: 'null',
	},
	{
		id: 300,
		name: 'Emily Young',
		imageUrl: withPrefix(`${imageDir}/young-emily.jpg`),
		imageHoverUrl: withPrefix(`${imageDir}/young-emily-h.jpg`),
		title: 'Graphic Design Manager',
		icon: 'fa_stroopwafel',
		page: 'null',
	},
	{
		id: 310,
		name: 'Rachel Yuan',
		imageUrl: withPrefix(`${imageDir}/yuan-rachel.jpg`),
		imageHoverUrl: withPrefix(`${imageDir}/yuan-rachel-h.jpg`),
		title: 'Senior Graphic Designer',
		icon: 'fa_chess_queen',
		page: 'null',
	},
]

export default teamMembers
