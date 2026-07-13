declare module "packages/com/christofmeg/justenoughbreeding/serializer/$AllayDuplicationSerializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$AllayDuplicationRecipe, $AllayDuplicationRecipe$Type} from "packages/com/christofmeg/justenoughbreeding/recipe/$AllayDuplicationRecipe"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $AllayDuplicationSerializer implements $RecipeSerializer<($AllayDuplicationRecipe)> {

constructor()

public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: $AllayDuplicationRecipe$Type): void
public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): $AllayDuplicationRecipe
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): $AllayDuplicationRecipe
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): $AllayDuplicationRecipe
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AllayDuplicationSerializer$Type = ($AllayDuplicationSerializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AllayDuplicationSerializer_ = $AllayDuplicationSerializer$Type;
}}
declare module "packages/com/christofmeg/justenoughbreeding/recipe/$AllayDuplicationRecipe" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$EntityType, $EntityType$Type} from "packages/net/minecraft/world/entity/$EntityType"
import {$BaseRecipe, $BaseRecipe$Type} from "packages/com/christofmeg/justenoughbreeding/recipe/$BaseRecipe"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $AllayDuplicationRecipe extends $BaseRecipe {
readonly "entityType": $EntityType<(any)>
 "inputStack": $Ingredient
 "spawnEgg": $Ingredient
readonly "jsonModID": string
readonly "jsonAnimalID": string
readonly "modFolder": string
readonly "fileName": string
readonly "inputEntityNbt": $CompoundTag

constructor(arg0: $EntityType$Type<(any)>, arg1: $Ingredient$Type, arg2: $Ingredient$Type, arg3: string, arg4: string, arg5: string, arg6: string, arg7: $CompoundTag$Type)

public "setInputIngredient"(arg0: $Ingredient$Type): void
public "setSpawnEggs"(arg0: $Ingredient$Type): void
public "getId"(): $ResourceLocation
public "getSerializer"(): $RecipeSerializer<(any)>
set "inputIngredient"(value: $Ingredient$Type)
set "spawnEggs"(value: $Ingredient$Type)
get "id"(): $ResourceLocation
get "serializer"(): $RecipeSerializer<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AllayDuplicationRecipe$Type = ($AllayDuplicationRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AllayDuplicationRecipe_ = $AllayDuplicationRecipe$Type;
}}
declare module "packages/com/christofmeg/justenoughbreeding/recipe/$TrustingRecipe" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$EntityType, $EntityType$Type} from "packages/net/minecraft/world/entity/$EntityType"
import {$BaseRecipe, $BaseRecipe$Type} from "packages/com/christofmeg/justenoughbreeding/recipe/$BaseRecipe"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $TrustingRecipe extends $BaseRecipe {
readonly "entityType": $EntityType<(any)>
 "inputStack": $Ingredient
 "spawnEgg": $Ingredient
 "extraInputStack": $Ingredient
readonly "jsonModID": string
readonly "jsonAnimalID": string
readonly "modFolder": string
readonly "fileName": string
readonly "inputEntityNbt": $CompoundTag

constructor(arg0: $EntityType$Type<(any)>, arg1: $Ingredient$Type, arg2: $Ingredient$Type, arg3: $Ingredient$Type, arg4: string, arg5: string, arg6: string, arg7: string, arg8: $CompoundTag$Type)

public "setInputIngredient"(arg0: $Ingredient$Type): void
public "setExtraInputIngredient"(arg0: $Ingredient$Type): void
public "setSpawnEggs"(arg0: $Ingredient$Type): void
public "getId"(): $ResourceLocation
public "getSerializer"(): $RecipeSerializer<(any)>
set "inputIngredient"(value: $Ingredient$Type)
set "extraInputIngredient"(value: $Ingredient$Type)
set "spawnEggs"(value: $Ingredient$Type)
get "id"(): $ResourceLocation
get "serializer"(): $RecipeSerializer<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TrustingRecipe$Type = ($TrustingRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TrustingRecipe_ = $TrustingRecipe$Type;
}}
declare module "packages/com/christofmeg/justenoughbreeding/recipe/$TamingRecipe" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$EntityType, $EntityType$Type} from "packages/net/minecraft/world/entity/$EntityType"
import {$BaseRecipe, $BaseRecipe$Type} from "packages/com/christofmeg/justenoughbreeding/recipe/$BaseRecipe"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $TamingRecipe extends $BaseRecipe {
readonly "entityType": $EntityType<(any)>
 "inputStack": $Ingredient
 "spawnEgg": $Ingredient
 "extraInputStack": $Ingredient
readonly "jsonModID": string
readonly "jsonAnimalID": string
readonly "modFolder": string
readonly "fileName": string
readonly "inputEntityNbt": $CompoundTag

constructor(arg0: $EntityType$Type<(any)>, arg1: $Ingredient$Type, arg2: $Ingredient$Type, arg3: $Ingredient$Type, arg4: string, arg5: string, arg6: string, arg7: string, arg8: $CompoundTag$Type)

public "setInputIngredient"(arg0: $Ingredient$Type): void
public "setExtraInputIngredient"(arg0: $Ingredient$Type): void
public "setSpawnEggs"(arg0: $Ingredient$Type): void
public "getId"(): $ResourceLocation
public "getSerializer"(): $RecipeSerializer<(any)>
set "inputIngredient"(value: $Ingredient$Type)
set "extraInputIngredient"(value: $Ingredient$Type)
set "spawnEggs"(value: $Ingredient$Type)
get "id"(): $ResourceLocation
get "serializer"(): $RecipeSerializer<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TamingRecipe$Type = ($TamingRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TamingRecipe_ = $TamingRecipe$Type;
}}
declare module "packages/com/christofmeg/justenoughbreeding/serializer/$TamingSerializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$TamingRecipe, $TamingRecipe$Type} from "packages/com/christofmeg/justenoughbreeding/recipe/$TamingRecipe"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $TamingSerializer implements $RecipeSerializer<($TamingRecipe)> {

constructor()

public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: $TamingRecipe$Type): void
public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): $TamingRecipe
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): $TamingRecipe
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): $TamingRecipe
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TamingSerializer$Type = ($TamingSerializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TamingSerializer_ = $TamingSerializer$Type;
}}
declare module "packages/com/christofmeg/justenoughbreeding/recipe/$BreedingRecipe" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$EntityType, $EntityType$Type} from "packages/net/minecraft/world/entity/$EntityType"
import {$BaseRecipe, $BaseRecipe$Type} from "packages/com/christofmeg/justenoughbreeding/recipe/$BaseRecipe"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $BreedingRecipe extends $BaseRecipe {
readonly "entityType": $EntityType<(any)>
 "inputStack": $Ingredient
 "spawnEgg": $Ingredient
readonly "needsToBeTamed": boolean
 "resultItemStack": $Ingredient
 "extraInputStack": $Ingredient
readonly "animalTrusting": boolean
readonly "jsonModID": string
readonly "jsonAnimalID": string
readonly "modFolder": string
readonly "fileName": string
readonly "inputEntityNbt": $CompoundTag

constructor(arg0: $EntityType$Type<(any)>, arg1: $Ingredient$Type, arg2: $Ingredient$Type, arg3: boolean, arg4: $Ingredient$Type, arg5: $Ingredient$Type, arg6: boolean, arg7: string, arg8: string, arg9: string, arg10: string, arg11: $CompoundTag$Type)

public "setInputIngredient"(arg0: $Ingredient$Type): void
public "setExtraInputIngredient"(arg0: $Ingredient$Type): void
public "setSpawnEggs"(arg0: $Ingredient$Type): void
public "getId"(): $ResourceLocation
public "getSerializer"(): $RecipeSerializer<(any)>
public "setOutputIngredient"(arg0: $Ingredient$Type): void
set "inputIngredient"(value: $Ingredient$Type)
set "extraInputIngredient"(value: $Ingredient$Type)
set "spawnEggs"(value: $Ingredient$Type)
get "id"(): $ResourceLocation
get "serializer"(): $RecipeSerializer<(any)>
set "outputIngredient"(value: $Ingredient$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BreedingRecipe$Type = ($BreedingRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BreedingRecipe_ = $BreedingRecipe$Type;
}}
declare module "packages/com/christofmeg/justenoughbreeding/recipe/$BaseRecipe" {
import {$InputReplacement, $InputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$InputReplacement"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$RecipeSchema, $RecipeSchema$Type} from "packages/dev/latvian/mods/kubejs/recipe/schema/$RecipeSchema"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$CraftingContainer, $CraftingContainer$Type} from "packages/net/minecraft/world/inventory/$CraftingContainer"
import {$ReplacementMatch, $ReplacementMatch$Type} from "packages/dev/latvian/mods/kubejs/recipe/$ReplacementMatch"
import {$OutputReplacement, $OutputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$OutputReplacement"

export class $BaseRecipe implements $Recipe<($CraftingContainer)> {

constructor()

public "getId"(): $ResourceLocation
public "isSpecial"(): boolean
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "getSerializer"(): $RecipeSerializer<(any)>
public "assemble"(arg0: $CraftingContainer$Type, arg1: $RegistryAccess$Type): $ItemStack
public "getResultItem"(arg0: $RegistryAccess$Type): $ItemStack
public "matches"(arg0: $CraftingContainer$Type, arg1: $Level$Type): boolean
public "getRemainingItems"(arg0: $CraftingContainer$Type): $NonNullList<($ItemStack)>
public "getIngredients"(): $NonNullList<($Ingredient)>
public "showNotification"(): boolean
public "getToastSymbol"(): $ItemStack
public "isIncomplete"(): boolean
public "getMod"(): string
public "getGroup"(): string
public "setGroup"(group: string): void
public "getOrCreateId"(): $ResourceLocation
public "getSchema"(): $RecipeSchema
public "hasInput"(match: $ReplacementMatch$Type): boolean
public "replaceInput"(match: $ReplacementMatch$Type, arg1: $InputReplacement$Type): boolean
public "hasOutput"(match: $ReplacementMatch$Type): boolean
public "replaceOutput"(match: $ReplacementMatch$Type, arg1: $OutputReplacement$Type): boolean
public "getType"(): $ResourceLocation
get "id"(): $ResourceLocation
get "special"(): boolean
get "serializer"(): $RecipeSerializer<(any)>
get "ingredients"(): $NonNullList<($Ingredient)>
get "toastSymbol"(): $ItemStack
get "incomplete"(): boolean
get "mod"(): string
get "group"(): string
set "group"(value: string)
get "orCreateId"(): $ResourceLocation
get "schema"(): $RecipeSchema
get "type"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BaseRecipe$Type = ($BaseRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BaseRecipe_ = $BaseRecipe$Type;
}}
declare module "packages/com/christofmeg/justenoughbreeding/serializer/$TemperSerializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$TemperRecipe, $TemperRecipe$Type} from "packages/com/christofmeg/justenoughbreeding/recipe/$TemperRecipe"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $TemperSerializer implements $RecipeSerializer<($TemperRecipe)> {

constructor()

public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: $TemperRecipe$Type): void
public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): $TemperRecipe
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): $TemperRecipe
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): $TemperRecipe
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TemperSerializer$Type = ($TemperSerializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TemperSerializer_ = $TemperSerializer$Type;
}}
declare module "packages/com/christofmeg/justenoughbreeding/serializer/$TrustingSerializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$TrustingRecipe, $TrustingRecipe$Type} from "packages/com/christofmeg/justenoughbreeding/recipe/$TrustingRecipe"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $TrustingSerializer implements $RecipeSerializer<($TrustingRecipe)> {

constructor()

public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: $TrustingRecipe$Type): void
public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): $TrustingRecipe
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): $TrustingRecipe
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): $TrustingRecipe
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TrustingSerializer$Type = ($TrustingSerializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TrustingSerializer_ = $TrustingSerializer$Type;
}}
declare module "packages/com/christofmeg/justenoughbreeding/recipe/$TemperRecipe" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$EntityType, $EntityType$Type} from "packages/net/minecraft/world/entity/$EntityType"
import {$BaseRecipe, $BaseRecipe$Type} from "packages/com/christofmeg/justenoughbreeding/recipe/$BaseRecipe"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $TemperRecipe extends $BaseRecipe {
readonly "entityType": $EntityType<(any)>
 "inputStack": $Ingredient
 "spawnEgg": $Ingredient
 "extraInputStack": $Ingredient
readonly "jsonModID": string
readonly "jsonAnimalID": string
readonly "modFolder": string
readonly "fileName": string
readonly "inputEntityNbt": $CompoundTag

constructor(arg0: $EntityType$Type<(any)>, arg1: $Ingredient$Type, arg2: $Ingredient$Type, arg3: $Ingredient$Type, arg4: string, arg5: string, arg6: string, arg7: string, arg8: $CompoundTag$Type)

public "setInputIngredient"(arg0: $Ingredient$Type): void
public "setExtraInputIngredient"(arg0: $Ingredient$Type): void
public "setSpawnEggs"(arg0: $Ingredient$Type): void
public "getId"(): $ResourceLocation
public "getSerializer"(): $RecipeSerializer<(any)>
set "inputIngredient"(value: $Ingredient$Type)
set "extraInputIngredient"(value: $Ingredient$Type)
set "spawnEggs"(value: $Ingredient$Type)
get "id"(): $ResourceLocation
get "serializer"(): $RecipeSerializer<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TemperRecipe$Type = ($TemperRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TemperRecipe_ = $TemperRecipe$Type;
}}
declare module "packages/com/christofmeg/justenoughbreeding/serializer/$BreedingSerializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$BreedingRecipe, $BreedingRecipe$Type} from "packages/com/christofmeg/justenoughbreeding/recipe/$BreedingRecipe"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $BreedingSerializer implements $RecipeSerializer<($BreedingRecipe)> {

constructor()

public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: $BreedingRecipe$Type): void
public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): $BreedingRecipe
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): $BreedingRecipe
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): $BreedingRecipe
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BreedingSerializer$Type = ($BreedingSerializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BreedingSerializer_ = $BreedingSerializer$Type;
}}
declare module "packages/com/christofmeg/justenoughbreeding/serializer/$TransformationSerializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$TransformationRecipe, $TransformationRecipe$Type} from "packages/com/christofmeg/justenoughbreeding/recipe/$TransformationRecipe"
import {$BaseRecipe, $BaseRecipe$Type} from "packages/com/christofmeg/justenoughbreeding/recipe/$BaseRecipe"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $TransformationSerializer implements $RecipeSerializer<($TransformationRecipe)> {

constructor()

public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: $TransformationRecipe$Type): void
public static "readJsonContents"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): $BaseRecipe
public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): $TransformationRecipe
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): $TransformationRecipe
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): $TransformationRecipe
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TransformationSerializer$Type = ($TransformationSerializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TransformationSerializer_ = $TransformationSerializer$Type;
}}
declare module "packages/com/christofmeg/justenoughbreeding/recipe/$TransformationRecipe" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$EntityType, $EntityType$Type} from "packages/net/minecraft/world/entity/$EntityType"
import {$BaseRecipe, $BaseRecipe$Type} from "packages/com/christofmeg/justenoughbreeding/recipe/$BaseRecipe"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $TransformationRecipe extends $BaseRecipe {
readonly "inputEntityType": $EntityType<(any)>
 "inputStack": $Ingredient
 "inputSpawnEgg": $Ingredient
 "extraInputStack": $Ingredient
readonly "outputEntityType": $EntityType<(any)>
 "outputSpawnEgg": $Ingredient
readonly "needsToBeTamed": boolean
readonly "jsonModID": string
readonly "modFolder": string
readonly "fileName": string
readonly "inputEntityNbt": $CompoundTag
readonly "outputEntityNbt": $CompoundTag

constructor(arg0: $EntityType$Type<(any)>, arg1: $Ingredient$Type, arg2: $Ingredient$Type, arg3: $Ingredient$Type, arg4: $EntityType$Type<(any)>, arg5: $Ingredient$Type, arg6: boolean, arg7: string, arg8: string, arg9: string, arg10: $CompoundTag$Type, arg11: $CompoundTag$Type)

public "setInputSpawnEggs"(arg0: $Ingredient$Type): void
public "setOutputSpawnEggs"(arg0: $Ingredient$Type): void
public "setInputIngredient"(arg0: $Ingredient$Type): void
public "setExtraInputIngredient"(arg0: $Ingredient$Type): void
public "getId"(): $ResourceLocation
public "getSerializer"(): $RecipeSerializer<(any)>
set "inputSpawnEggs"(value: $Ingredient$Type)
set "outputSpawnEggs"(value: $Ingredient$Type)
set "inputIngredient"(value: $Ingredient$Type)
set "extraInputIngredient"(value: $Ingredient$Type)
get "id"(): $ResourceLocation
get "serializer"(): $RecipeSerializer<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TransformationRecipe$Type = ($TransformationRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TransformationRecipe_ = $TransformationRecipe$Type;
}}
