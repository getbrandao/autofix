export function selectMenu(menuId) {
  return {
    type: "MENU_SELECTED",
    payload: menuId
  };
}
