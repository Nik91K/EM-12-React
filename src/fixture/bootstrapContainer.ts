import { bootstrapComponentType } from '../types/bootstrapPage.ts'

export const BootstrapContainer: bootstrapComponentType[] = [
    {
        id: 1,
        icon: './images/bootstrapIcon/icons8-box.svg',
        title: 'Install via package manager',
        text: 'Install Bootstrap’s source Sass and JavaScript files via npm, RubyGems, Composer, or Meteor. Package managed installs don’t include documentation or our full build scripts. You can also use any demo from our Examples repo to quickly jumpstart Bootstrap projects.',
        children: ('<p>Read our installation docs for more info and additional package managers.</p>')
            
    },
    {
        id: 2,
        icon: './images/bootstrapIcon/icons8-internet-50.png',
        title: 'Include via CDN',
        text: 'When you only need to include Bootstrap’s compiled CSS or JS, you can use jsDelivr. See it in action with our simple quick start, or browse the examples to jumpstart your next project. You can also choose to include Popper and our JS separately.',
    },
]