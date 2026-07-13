declare module "packages/someassemblyrequired/item/$SpreadItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $SpreadItem extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static "BASE_ATTACK_DAMAGE_UUID": $UUID
static "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $Item$Properties$Type)

public "isFoil"(arg0: $ItemStack$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpreadItem$Type = ($SpreadItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpreadItem_ = $SpreadItem$Type;
}}
declare module "packages/someassemblyrequired/item/sandwich/$SandwichItem" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$IClientItemExtensions, $IClientItemExtensions$Type} from "packages/net/minecraftforge/client/extensions/common/$IClientItemExtensions"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Potion, $Potion$Type} from "packages/net/minecraft/world/item/alchemy/$Potion"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$BlockItem, $BlockItem$Type} from "packages/net/minecraft/world/item/$BlockItem"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$ICapabilityProvider, $ICapabilityProvider$Type} from "packages/net/minecraftforge/common/capabilities/$ICapabilityProvider"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$ItemLike, $ItemLike$Type} from "packages/net/minecraft/world/level/$ItemLike"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $SandwichItem extends $BlockItem {
static readonly "BLOCK_ENTITY_TAG": string
static readonly "BLOCK_STATE_TAG": string
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static "BASE_ATTACK_DAMAGE_UUID": $UUID
static "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $Block$Type, arg1: $Item$Properties$Type)

public static "makeBurger"(...arg0: ($ItemLike$Type)[]): $ItemStack
public static "makeBurger"(...arg0: ($ItemStack$Type)[]): $ItemStack
public static "makeToastSandwich"(...arg0: ($ItemStack$Type)[]): $ItemStack
public static "makeToastSandwich"(...arg0: ($ItemLike$Type)[]): $ItemStack
public static "makeSandwich"(...arg0: ($ItemLike$Type)[]): $ItemStack
public static "makeSandwich"(arg0: $Potion$Type): $ItemStack
public static "makeSandwich"(...arg0: ($ItemStack$Type)[]): $ItemStack
public "initCapabilities"(arg0: $ItemStack$Type, arg1: $CompoundTag$Type): $ICapabilityProvider
public "initializeClient"(arg0: $Consumer$Type<($IClientItemExtensions$Type)>): void
public "finishUsingItem"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $LivingEntity$Type): $ItemStack
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getName"(arg0: $ItemStack$Type): $Component
public "place"(arg0: $UseOnContext$Type, arg1: $BlockPos$Type, arg2: $ItemStack$Type): $InteractionResult
public "getFoodProperties"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type): $FoodProperties
public static "of"(...arg0: ($ItemStack$Type)[]): $ItemStack
public static "of"(arg0: $List$Type<($ItemStack$Type)>): $ItemStack
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SandwichItem$Type = ($SandwichItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SandwichItem_ = $SandwichItem$Type;
}}
declare module "packages/someassemblyrequired/item/sandwich/$SandwichItemHandler" {
import {$ListTag, $ListTag$Type} from "packages/net/minecraft/nbt/$ListTag"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$MobEffectInstance, $MobEffectInstance$Type} from "packages/net/minecraft/world/effect/$MobEffectInstance"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockContainerJS, $BlockContainerJS$Type} from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"
import {$IItemHandlerModifiable, $IItemHandlerModifiable$Type} from "packages/net/minecraftforge/items/$IItemHandlerModifiable"
import {$IItemHandler, $IItemHandler$Type} from "packages/net/minecraftforge/items/$IItemHandler"
import {$Spliterator, $Spliterator$Type} from "packages/java/util/$Spliterator"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$FoodProperties$Builder, $FoodProperties$Builder$Type} from "packages/net/minecraft/world/food/$FoodProperties$Builder"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ICapabilityProvider, $ICapabilityProvider$Type} from "packages/net/minecraftforge/common/capabilities/$ICapabilityProvider"
import {$INBTSerializable, $INBTSerializable$Type} from "packages/net/minecraftforge/common/util/$INBTSerializable"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$Iterator, $Iterator$Type} from "packages/java/util/$Iterator"

export class $SandwichItemHandler implements $IItemHandler, $IItemHandlerModifiable, $INBTSerializable<($ListTag)>, $Iterable<($ItemStack)> {

constructor()

public "setItems"(arg0: $List$Type<($ItemStack$Type)>): void
public static "serializeItems"(arg0: $List$Type<($ItemStack$Type)>): $ListTag
public "isDoubleDeckerSandwich"(): boolean
public "getAsItem"(): $ItemStack
public "getTotalNutrition"(): integer
public "getAverageSaturation"(): float
public "addBonusEffect"(arg0: $FoodProperties$Builder$Type, arg1: integer): void
public "hasTopAndBottomBread"(): boolean
public "canAdd"(arg0: $SandwichItemHandler$Type): boolean
public "setStackInSlot"(arg0: integer, arg1: $ItemStack$Type): void
public "getItems"(): $List<($ItemStack)>
public "getEffect"(): $MobEffectInstance
public "getStackInSlot"(arg0: integer): $ItemStack
public "insertItem"(arg0: integer, arg1: $ItemStack$Type, arg2: boolean): $ItemStack
public "extractItem"(arg0: integer, arg1: integer, arg2: boolean): $ItemStack
public "getSlotLimit"(arg0: integer): integer
public "isItemValid"(arg0: integer, arg1: $ItemStack$Type): boolean
public "isBurger"(): boolean
public "bottom"(): $ItemStack
public "getItemCount"(): integer
public "pop"(): void
public "getSlots"(): integer
public "getTotalHeight"(): integer
public "getFoodProperties"(): $FoodProperties
public "deserializeNBT"(arg0: $ListTag$Type): void
public "add"(arg0: $ItemStack$Type): void
public "add"(arg0: $SandwichItemHandler$Type): void
public static "get"(arg0: $ICapabilityProvider$Type): $Optional<($SandwichItemHandler)>
public "isEmpty"(): boolean
public "iterator"(): $Iterator<($ItemStack)>
public static "of"(arg0: $List$Type<($ItemStack$Type)>): $SandwichItemHandler
public "top"(): $ItemStack
public "isMutable"(): boolean
public "getSlots"(): integer
public "getStackInSlot"(i: integer): $ItemStack
public "insertItem"(i: integer, itemStack: $ItemStack$Type, b: boolean): $ItemStack
public "getSlotLimit"(i: integer): integer
public "extractItem"(i: integer, i1: integer, b: boolean): $ItemStack
public "setStackInSlot"(slot: integer, stack: $ItemStack$Type): void
public "isItemValid"(i: integer, itemStack: $ItemStack$Type): boolean
public "kjs$self"(): $IItemHandler
public "getBlock"(level: $Level$Type): $BlockContainerJS
public "spliterator"(): $Spliterator<($ItemStack)>
public "forEach"(arg0: $Consumer$Type<(any)>): void
public "count"(): integer
public "count"(ingredient: $Ingredient$Type): integer
public "countNonEmpty"(ingredient: $Ingredient$Type): integer
public "countNonEmpty"(): integer
public "getAllItems"(): $List<($ItemStack)>
public "insertItem"(stack: $ItemStack$Type, simulate: boolean): $ItemStack
public "getWidth"(): integer
public "getHeight"(): integer
public "clear"(ingredient: $Ingredient$Type): void
public "clear"(): void
public "setChanged"(): void
public "asContainer"(): $Container
public "find"(ingredient: $Ingredient$Type): integer
public "find"(): integer
public "isEmpty"(): boolean
[Symbol.iterator](): IterableIterator<$ItemStack>;
set "items"(value: $List$Type<($ItemStack$Type)>)
get "doubleDeckerSandwich"(): boolean
get "asItem"(): $ItemStack
get "totalNutrition"(): integer
get "averageSaturation"(): float
get "items"(): $List<($ItemStack)>
get "effect"(): $MobEffectInstance
get "burger"(): boolean
get "itemCount"(): integer
get "slots"(): integer
get "totalHeight"(): integer
get "foodProperties"(): $FoodProperties
get "empty"(): boolean
get "mutable"(): boolean
get "slots"(): integer
get "allItems"(): $List<($ItemStack)>
get "width"(): integer
get "height"(): integer
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SandwichItemHandler$Type = ($SandwichItemHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SandwichItemHandler_ = $SandwichItemHandler$Type;
}}
declare module "packages/someassemblyrequired/item/$EnchantedGoldenAppleSlicesItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $EnchantedGoldenAppleSlicesItem extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static "BASE_ATTACK_DAMAGE_UUID": $UUID
static "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
 "renderProperties": any

constructor(arg0: $Item$Properties$Type)

public "isFoil"(arg0: $ItemStack$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnchantedGoldenAppleSlicesItem$Type = ($EnchantedGoldenAppleSlicesItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnchantedGoldenAppleSlicesItem_ = $EnchantedGoldenAppleSlicesItem$Type;
}}
