import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { MenuItem, MenuWrapper, SubmenuItemWrapper } from "./style";
import { Link } from "gatsby";

const Menu = () => {
  const result = useStaticQuery(graphql`
    fragment menuItemData on ContentfulMenuItem {
      id
      label
      page {
        slug
      }
    }
    
    query MyQuery {
      contentfulMenu {
        menuItem {
          ...menuItemData
          submenuItem {
            ...menuItemData
          }
        }
      }
    }
  `) 

  return (
    <MenuWrapper>
      {result.contentfulMenu.menuItem.map((menuItem) => (
        <MenuItem key={menuItem.id}>
          {!menuItem.submenuItem ? (
            <Link to={`/${menuItem.page.slug}`}>{menuItem.label}</Link>
          ) : (
            <SubmenuItemWrapper>
              <div>{menuItem.label}</div>
              <div>
                {menuItem.submenuItem?.map((submenuItem) => (
                  <div key={submenuItem.id}>
                    <Link to={`/${submenuItem.page.slug}`}>{submenuItem.label}</Link>
                  </div>
                ))}
              </div>
            </SubmenuItemWrapper>
          )}
        </MenuItem>
      ))}
    </MenuWrapper>
  );
}

export default Menu;