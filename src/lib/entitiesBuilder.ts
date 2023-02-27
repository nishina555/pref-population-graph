import { Prefecture, PrefectureEntity } from "@/types/state/prefectures";

type BaseEntity = {
  id: number;
};

type ById<T> = {
  [entityId: number]: T;
};

const buildById = <T extends BaseEntity>(entities: T[]) => {
  const byId: ById<T> = {};
  entities.forEach((entity) => {
    byId[entity.id] = entity;
  });
  return byId;
};

const buildAllIds = <T extends BaseEntity>(byId: ById<T>) => {
  return Object.keys(byId).map((id) => Number(id));
};

export const buildEntities = <T extends BaseEntity>(entities: T[]) => {
  const byId = buildById<T>(entities);
  const allIds = buildAllIds<T>(byId);
  return { byId, allIds };
};

// Reduxのエンティティとして利用できるようにするため、idがプロパティに含まれないAPIレスポンスの場合はidを付与する。
export const convertResponseToEntities = <T>(
  response: T[]
): (T & { id: number })[] => {
  return response.map((data, index) => convertDataToEntity(data, index + 1));
};

const convertDataToEntity = <T>(data: T, index: number): T & { id: number } => {
  return { ...data, id: index };
};
// 上記のメソッドの汎用化をなくすと例えば以下のようになる。
// const convertPrefResponseToPrefEntities = (
//   response: Prefecture[]
// ): PrefectureEntity[] => {
//   return response.map((prefecture, index) => {
//     return { ...prefecture, id: index + 1 };
//   });
// };
