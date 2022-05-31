import NavigationBar from "../NavigationBar";
import Button from '../Button';

import { CgProfile } from "react-icons/cg";
import logoImg from '../images/dfg_square.png';
import Dropdown from "../Dropdown";
import NavLogo from '../NavLogo';
import NavItem from '../NavItem';
import NavGroup from '../NavGroup';
export default {
    title: "Components/Navigation/NavigationBar",
    component: NavigationBar,
    argTypes: {
        align: {
            options: ['left', 'center', 'right'],
            control: { type: 'select' },
            description: "Set the alignment of the Navbar items",
            default: "left"
        },
        hover: {
            options: ['fill', 'underline', 'highlight'],
            control: { type: 'select' },
            description: "Set the hover type of the Navbar items",
        },
        hoverItem: { 
            description: "Set the hover type of the dropdown menu items (any combination of sidehighlight, highlight, and fall)",
        },
        navItems: {
            description: "Change the items within the nav group",
        },
        
    },
    parameters: {
        docs: {
            description: {
              component: `
              
              \n ## Structure of Components \n 
              \n The Navigation Bar, unlike most other components, comes with many other subcomponents within the main <NavigationBar> group. These subcomponents make up the actual items within the menu and include the buttons, links, dropdowns, and logo. 
              \n \n \n 
              \n ### Subcomponents \n  
              
              \n #### NavLogo \n 
              
              \nThis component stands alone within the Navigation Bar and takes a single logo prop which takes in a component which will act as the logo of the navigation bar (usually an svg). 
              \n
              
              \n #### NavGroup \n 
              
              \nThis is a parent component that simply groups NavItems and Dropdowns. It takes no props and is just used to organize these other items. 
              \n

              \n#### Dropdown \n
               
              \nThe Dropdown component is used as an alternative to NavItem when you want the item to have a dropdown menu. It takes a title prop which can be text or a React element (such as an icon), the items prop which takes the actual items of the menu in an array of objects (currently only supporting the title property but could easily be modified to add links), and the hover and hoverItem props which describes the hover states of the dropdown label and dropdown items respectively.
              \n
              
              \n #### Buttons \n 
              
              \nThe Button component functions identically to the aforementioned component, the only distinction is to wrap the component in a div with the “navButton” class to properly format it in the navigation menu.
              \n

              \n #### NavItem \n
              
              \nThe NavItem takes in a text prop which is a string that will be the label of the item, a hover prop describing the hover state effect, and a link prop which is a string of the page to which the item should link to. 
              \n

              \n### Stories\n 
              
              \nNote how each story has different states of the navigation bar (default, signed in, and no account). These are a result of the structure of the code which can be seen in the code samples provided.
              \n
              `,
            },
          },
    }
};

const DefaultTemplate = (args) => { 
        return (
        <>
        <NavigationBar>
            <NavLogo logo={logoImg}/>
            <NavGroup align={args.align} >
              { args.navItems.map((item, index) => {
                  return ( //can probably seperate this to another component
                      <>
                      {
                      item.subitems ? 
                      (<Dropdown hover={args.hover} key={index} title={item.title} items={item.subitems} hoverItem={args.hoverItem}/>) 
                      : 
                      (
                      <NavItem hover={args.hover} key={index} text={item.title}/>                
                      )
                      }
                      </>
                  );
              }) }
            </NavGroup>
            <div class="navButton"> 
            <Button type="elevated" label="Sign Up" fontSize="16px" /> 
            </div>
            <div class="navButton"> 
            <Button label="Sign Up" fontSize="16px" /> 
            </div>
        </NavigationBar>
        </>
        );
    };

const SignedInTemplate = (args, { globals: { brandColor, brandFont } }) => {
    return (
        <NavigationBar>
        <NavLogo logo={logoImg}/>
        <NavGroup align={args.align} >
          { args.navItems.map((item, index) => {
              return ( //can probably seperate this to another component
                  <>
                  {
                  item.subitems ? 
                  (<Dropdown hover={args.hover} key={index} title={item.title} items={item.subitems} hoverItem={args.hoverItem}/>) 
                  : 
                  (
                  <NavItem hover={args.hover} key={index} text={item.title}/>                
                  )
                  }
                  </>
              );
          }) }
        </NavGroup>
        <Dropdown hover={args.hover} hoverItem={args.hoverItem} title={<CgProfile size={32} color="grey" />} items={[
        {
        title: "View Profile"
        },
        {
          title: "Settings"
        },
        {
        title: "Account"
        },
        {
        title: "Help & Support"
        },
        {
          title: "Logout"
        },
          
        ]}/>
    </NavigationBar>

        );
    
};

const noAccountTemplate = (args, { globals: { brandColor, brandFont } }) => {
    return (
        
        <NavigationBar>
            <NavLogo logo={logoImg}/>
            <NavGroup align={args.align} >
            { args.navItems.map((item, index) => {
                return ( //can probably seperate this to another component
                    <>
                    {
                    item.subitems ? 
                    (<Dropdown hover={args.hover} key={index} title={item.title} items={item.subitems} hoverItem={args.hoverItem}/>) 
                    : 
                    (
                    <NavItem hover={args.hover} key={index} text={item.title}/>                
                    )
                    }
                    </>
                );
            }) }
            </NavGroup>
            <div class="navButton"> 
                <Button label="Donate" /> 
            </div>
            
        </NavigationBar>

        );
};
export const Default = DefaultTemplate.bind({});

Default.args = { 
    align: 'left',
    hover: 'fill',
    hoverItem: 'sidehighlight fill',
    navItems: [
        {
         title: "Home"
        },
        
        {
         title: "Blog"
        },
        {
         title: "About",
         subitems: [
            {
            title: "View Our Work"
            },
            {
            title: "Who We Are",
            },
            {
            title: "Compare All Plans"
            },
            {
            title: "View our demo page"
            }
         ]
        },
        {
            title: "Contact"
        }
    ]
};

export const SignedIn = SignedInTemplate.bind({});

SignedIn.args = {
    align: 'left',
    hover: 'fill', 
    hoverItem: 'sidehighlight fill',
    navItems: [
        {
         title: "Home"
        },
        
        {
         title: "Blog"
        },
        {
         title: "About",
         subitems: [
            {
            title: "View Our Work"
            },
            {
            title: "Who We Are",
            },
            {
            title: "Compare All Plans"
            },
            {
            title: "View our demo page"
            }
         ]
        },
        {
            title: "Contact"
        }
    ]
};

export const NoAccount = noAccountTemplate.bind({});

NoAccount.args = { 
    align: 'left',
    hover: 'fill',
    hoverItem: 'sidehighlight fill',
    navItems: [
        {
         title: "Home"
        },
        
        {
         title: "Blog"
        },
        {
         title: "About",
         subitems: [
            {
            title: "View Our Work"
            },
            {
            title: "Who We Are",
            },
            {
            title: "Compare All Plans"
            },
            {
            title: "View our demo page"
            }
         ]
        },
        {
            title: "Contact"
        }
    ]
};