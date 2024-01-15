import { TangibleWealthes } from "./wealth-management.types";

  export function flattenTangibleWealth(data: TangibleWealthes[]): TangibleWealthes[] {
    const flattenedData: TangibleWealthes[] = [];
  
    function flatten(item: TangibleWealthes) {
      flattenedData.push(item);
      if (item.child.length > 0) {
        item.child.forEach((childItem) => {
          childItem.parentId = item.id;
          flatten(childItem);
        });
      }
      delete item.child;
    }
  
    data.forEach((item) => {
      flatten(item);
    });
  
    return flattenedData;
  }
  
