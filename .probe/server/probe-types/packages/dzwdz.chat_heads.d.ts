declare module "packages/dzwdz/chat_heads/$HeadData" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$PlayerInfo, $PlayerInfo$Type} from "packages/net/minecraft/client/multiplayer/$PlayerInfo"

export class $HeadData extends $Record {
static "EMPTY": $HeadData

constructor(playerInfo: $PlayerInfo$Type, codePointIndex: integer)

public "codePointIndex"(): integer
public "playerInfo"(): $PlayerInfo
public "hasHeadPosition"(): boolean
public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public static "of"(playerInfo: $PlayerInfo$Type): $HeadData
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HeadData$Type = ($HeadData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HeadData_ = $HeadData$Type;
}}
declare module "packages/dzwdz/chat_heads/mixininterface/$TextureLocationSettable" {
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $TextureLocationSettable {

 "chatheads$setTextureLocation"(arg0: $ResourceLocation$Type): void

(arg0: $ResourceLocation$Type): void
}

export namespace $TextureLocationSettable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TextureLocationSettable$Type = ($TextureLocationSettable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TextureLocationSettable_ = $TextureLocationSettable$Type;
}}
declare module "packages/dzwdz/chat_heads/mixininterface/$Ownable" {
import {$PlayerInfo, $PlayerInfo$Type} from "packages/net/minecraft/client/multiplayer/$PlayerInfo"

export interface $Ownable {

 "chatheads$getOwner"(): $PlayerInfo
 "chatheads$setOwner"(arg0: $PlayerInfo$Type): void
}

export namespace $Ownable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Ownable$Type = ($Ownable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Ownable_ = $Ownable$Type;
}}
declare module "packages/dzwdz/chat_heads/mixininterface/$HeadRenderable" {
import {$HeadData, $HeadData$Type} from "packages/dzwdz/chat_heads/$HeadData"

export interface $HeadRenderable {

 "chatheads$getHeadData"(): $HeadData
 "chatheads$setHeadData"(arg0: $HeadData$Type): void
}

export namespace $HeadRenderable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HeadRenderable$Type = ($HeadRenderable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HeadRenderable_ = $HeadRenderable$Type;
}}
