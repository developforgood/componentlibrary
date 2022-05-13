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
            description: "Set the hover type of the dropdown menu items",
        },
        navItems: {
            description: "Change the items within the nav group",
        },
    }
};

const DefaultTemplate = (args, { globals: { brandColor, brandFont } }) => { 
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
            <Button type="superprimary" label="Sign Up" fontSize="16px"  fontFamily={brandFont} color={brandColor}/> 
            </div>
            <div class="navButton"> 
            <Button label="Sign Up" fontSize="16px"  fontFamily={brandFont} color={brandColor}/> 
            </div>
        </NavigationBar>

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
                <Button label="Donate" fontSize="16px"  fontFamily={brandFont} color={brandColor}/> 
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