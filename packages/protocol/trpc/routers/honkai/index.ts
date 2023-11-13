import { router } from "../../trpc";
import { avatarRouter } from "./avatar";
import { itemRouter } from "./item";
import { skillRouter } from "./avatarSkill";
import { lightConeRouter } from "./lightCone";

// TODO: filter conditional
export const honkaiRouter = router({
  avatar: avatarRouter,
  lightCone: lightConeRouter,
  skill: skillRouter,
  item: itemRouter,
});
