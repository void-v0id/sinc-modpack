declare module "packages/com/illusivesoulworks/veinmining/common/veinmining/enchantment/$VeinMiningEnchantment" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$Enchantment$Rarity, $Enchantment$Rarity$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment$Rarity"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$EnchantmentCategory, $EnchantmentCategory$Type} from "packages/net/minecraft/world/item/enchantment/$EnchantmentCategory"

export class $VeinMiningEnchantment extends $Enchantment {
 "slots": ($EquipmentSlot)[]
readonly "category": $EnchantmentCategory

constructor()

public static "canEnchant"(arg0: $Item$Type): boolean
public "getRarity"(): $Enchantment$Rarity
public "getMaxLevel"(): integer
public "getMinCost"(arg0: integer): integer
public "getMaxCost"(arg0: integer): integer
public "canEnchant"(arg0: $ItemStack$Type): boolean
public "isTreasureOnly"(): boolean
public "isTradeable"(): boolean
public "isDiscoverable"(): boolean
public "isAllowedOnBooks"(): boolean
public "canApplyAtEnchantingTable"(arg0: $ItemStack$Type): boolean
get "rarity"(): $Enchantment$Rarity
get "maxLevel"(): integer
get "treasureOnly"(): boolean
get "tradeable"(): boolean
get "discoverable"(): boolean
get "allowedOnBooks"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VeinMiningEnchantment$Type = ($VeinMiningEnchantment);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VeinMiningEnchantment_ = $VeinMiningEnchantment$Type;
}}
