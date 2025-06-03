import { AttributeType } from "@/CarType";

export const getAttributeById = (
  attributes: AttributeType[],
  id: string,
): AttributeType | undefined => {
  return attributes.find((attr) => attr.id === id);
};
