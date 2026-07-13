declare module "packages/com/qendolin/betterclouds/clouds/$Resources" {
import {$ShaderParameters, $ShaderParameters$Type} from "packages/com/qendolin/betterclouds/clouds/shaders/$ShaderParameters"
import {$Closeable, $Closeable$Type} from "packages/java/io/$Closeable"
import {$DepthShader, $DepthShader$Type} from "packages/com/qendolin/betterclouds/clouds/shaders/$DepthShader"
import {$PerfTimer, $PerfTimer$Type} from "packages/com/qendolin/betterclouds/clouds/$PerfTimer"
import {$Minecraft, $Minecraft$Type} from "packages/net/minecraft/client/$Minecraft"
import {$ShadingShader, $ShadingShader$Type} from "packages/com/qendolin/betterclouds/clouds/shaders/$ShadingShader"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$DebugShader, $DebugShader$Type} from "packages/com/qendolin/betterclouds/clouds/shaders/$DebugShader"
import {$ResourceManager, $ResourceManager$Type} from "packages/net/minecraft/server/packs/resources/$ResourceManager"
import {$ChunkedGenerator, $ChunkedGenerator$Type} from "packages/com/qendolin/betterclouds/clouds/$ChunkedGenerator"
import {$CoverageShader, $CoverageShader$Type} from "packages/com/qendolin/betterclouds/clouds/shaders/$CoverageShader"

export class $Resources implements $Closeable {
static readonly "NOISE_TEXTURE": $ResourceLocation
static readonly "LIGHTING_TEXTURE": $ResourceLocation

constructor()

public "reloadMeshPrimitives"(): void
public static "unbindVao"(): void
public static "unbindVbo"(): void
public "deleteTimer"(): void
public "deleteGenerator"(): void
public "deleteFramebuffer"(): void
public "deleteShaders"(): void
public "deleteMeshPrimitives"(): void
public "debugShader"(): $DebugShader
public "reloadShaders"(manager: $ResourceManager$Type, shaderParameters: $ShaderParameters$Type): void
public "reloadGenerator"(fancy: boolean): void
public "reloadFramebuffer"(width: integer, height: integer): void
public "reloadTimer"(): void
public "failedToLoadCritical"(): boolean
public "fboWidth"(): integer
public "fboHeight"(): integer
public "oitFbo"(): integer
public "coverageShader"(): $CoverageShader
public "oitCoverageDepthTexture"(): integer
public "oitDataTexture"(): integer
public "oitCoverageTexture"(): integer
public "shadingShader"(): $ShadingShader
public "cubeVao"(): integer
public "depthShader"(): $DepthShader
public "timer"(): $PerfTimer
public "reloadTextures"(client: $Minecraft$Type): void
public "close"(): void
public "generator"(): $ChunkedGenerator
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Resources$Type = ($Resources);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Resources_ = $Resources$Type;
}}
declare module "packages/com/qendolin/betterclouds/clouds/$PerfTimer" {
import {$AutoCloseable, $AutoCloseable$Type} from "packages/java/lang/$AutoCloseable"
import {$List, $List$Type} from "packages/java/util/$List"

export class $PerfTimer implements $AutoCloseable {

constructor()

public "gpu"(): $List<(double)>
public "cpu"(): $List<(double)>
public "start"(): void
public "stop"(): void
public "close"(): void
public "reset"(): void
public "frames"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PerfTimer$Type = ($PerfTimer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PerfTimer_ = $PerfTimer$Type;
}}
declare module "packages/com/qendolin/betterclouds/mixin/required/$GameRendererAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $GameRendererAccessor {

}

export namespace $GameRendererAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GameRendererAccessor$Type = ($GameRendererAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GameRendererAccessor_ = $GameRendererAccessor$Type;
}}
declare module "packages/com/qendolin/betterclouds/clouds/$Buffer" {
import {$AutoCloseable, $AutoCloseable$Type} from "packages/java/lang/$AutoCloseable"

export class $Buffer implements $AutoCloseable {

constructor(size: integer, fancy: boolean, preferPersistent: boolean)

public "hasChanged"(size: integer, fancy: boolean, persistent: boolean): boolean
public "bindDrawBuffer"(): void
public "setVAPointerToInstance"(baseInstance: integer): void
public "instanceVertexCount"(): integer
public "swapCount"(): integer
public "unbind"(): void
public "bind"(): void
public "swap"(): void
public "put"(x: float, y: float, z: float): void
public "clear"(): void
public "close"(): void
set "vAPointerToInstance"(value: integer)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Buffer$Type = ($Buffer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Buffer_ = $Buffer$Type;
}}
declare module "packages/com/qendolin/betterclouds/config/$Config$RegistryKeySerializer" {
import {$JsonElement, $JsonElement$Type} from "packages/com/google/gson/$JsonElement"
import {$JsonSerializer, $JsonSerializer$Type} from "packages/com/google/gson/$JsonSerializer"
import {$JsonDeserializer, $JsonDeserializer$Type} from "packages/com/google/gson/$JsonDeserializer"
import {$JsonSerializationContext, $JsonSerializationContext$Type} from "packages/com/google/gson/$JsonSerializationContext"
import {$Type, $Type$Type} from "packages/java/lang/reflect/$Type"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$DimensionType, $DimensionType$Type} from "packages/net/minecraft/world/level/dimension/$DimensionType"

export class $Config$RegistryKeySerializer implements $JsonSerializer<($ResourceKey<($DimensionType)>)>, $JsonDeserializer<($ResourceKey<($DimensionType)>)> {


public "serialize"(src: $ResourceKey$Type<($DimensionType$Type)>, typeOfSrc: $Type$Type, context: $JsonSerializationContext$Type): $JsonElement
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Config$RegistryKeySerializer$Type = ($Config$RegistryKeySerializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Config$RegistryKeySerializer_ = $Config$RegistryKeySerializer$Type;
}}
declare module "packages/com/qendolin/betterclouds/clouds/$ChunkedGenerator" {
import {$Buffer, $Buffer$Type} from "packages/com/qendolin/betterclouds/clouds/$Buffer"
import {$ChunkedGenerator$ChunkIndex, $ChunkedGenerator$ChunkIndex$Type} from "packages/com/qendolin/betterclouds/clouds/$ChunkedGenerator$ChunkIndex"
import {$AutoCloseable, $AutoCloseable$Type} from "packages/java/lang/$AutoCloseable"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Vector3d, $Vector3d$Type} from "packages/org/joml/$Vector3d"
import {$Config, $Config$Type} from "packages/com/qendolin/betterclouds/config/$Config"

export class $ChunkedGenerator implements $AutoCloseable {

constructor()

public "canRender"(): boolean
public "canGenerate"(): boolean
public "reallocateIfStale"(options: $Config$Type, fancy: boolean): boolean
public "generating"(): boolean
public "canSwap"(): boolean
public "renderOriginX"(cameraX: double): double
public "renderOriginZ"(cameraZ: double): double
public "instanceVertexCount"(): integer
public "cloudCount"(): integer
public "originX"(): double
public "originZ"(): double
public "unbind"(): void
public "allocate"(options: $Config$Type, fancy: boolean): void
public "bind"(): void
public "swap"(): void
public "generate"(): void
public "config"(): $Config
public "chunks"(): $List<($ChunkedGenerator$ChunkIndex)>
public "update"(camera: $Vector3d$Type, ticks: integer, tickDelta: float, options: $Config$Type, cloudiness: float): void
public "clear"(): void
public "buffer"(): $Buffer
public "close"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChunkedGenerator$Type = ($ChunkedGenerator);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChunkedGenerator_ = $ChunkedGenerator$Type;
}}
declare module "packages/com/qendolin/betterclouds/config/$FabricSeasonsConfig" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $FabricSeasonsConfig {
 "transitionDays": float
 "springCloudiness": float
 "summerCloudiness": float
 "fallCloudiness": float
 "winterCloudiness": float

constructor()
constructor(other: $FabricSeasonsConfig$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FabricSeasonsConfig$Type = ($FabricSeasonsConfig);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FabricSeasonsConfig_ = $FabricSeasonsConfig$Type;
}}
declare module "packages/com/qendolin/betterclouds/compat/$WorldDuck" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $WorldDuck {

 "betterclouds$getOriginalRainGradient"(arg0: float): float
 "betterclouds$getOriginalThunderGradient"(arg0: float): float
}

export namespace $WorldDuck {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WorldDuck$Type = ($WorldDuck);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WorldDuck_ = $WorldDuck$Type;
}}
declare module "packages/com/qendolin/betterclouds/clouds/shaders/$DepthShader" {
import {$Uniform, $Uniform$Type} from "packages/com/qendolin/betterclouds/clouds/shaders/$Uniform"
import {$Shader, $Shader$Type} from "packages/com/qendolin/betterclouds/clouds/shaders/$Shader"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$ResourceManager, $ResourceManager$Type} from "packages/net/minecraft/server/packs/resources/$ResourceManager"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $DepthShader extends $Shader {
static readonly "VERTEX_SHADER_ID": $ResourceLocation
static readonly "FRAGMENT_SHADER_ID": $ResourceLocation
readonly "uDepthTexture": $Uniform

constructor(resMan: $ResourceManager$Type, defs: $Map$Type<(string), (string)>)

public static "create"(manager: $ResourceManager$Type): $DepthShader
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DepthShader$Type = ($DepthShader);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DepthShader_ = $DepthShader$Type;
}}
declare module "packages/com/qendolin/betterclouds/clouds/shaders/$Uniform" {
import {$Vector3f, $Vector3f$Type} from "packages/org/joml/$Vector3f"
import {$Matrix4f, $Matrix4f$Type} from "packages/org/joml/$Matrix4f"

export class $Uniform {


public "setMat4"(arg0: (float)[], arg1: boolean): void
public "setMat4"(arg0: $Matrix4f$Type): void
public "setVec3"(arg0: float, arg1: float, arg2: float): void
public "setVec3"(arg0: $Vector3f$Type): void
public "setVec4"(arg0: float, arg1: float, arg2: float, arg3: float): void
public "setVec2"(arg0: float, arg1: float): void
public "toString"(): string
public "setInt"(arg0: integer): void
public "setFloat"(arg0: float): void
set "mat4"(value: $Matrix4f$Type)
set "vec3"(value: $Vector3f$Type)
set "int"(value: integer)
set "float"(value: float)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Uniform$Type = ($Uniform);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Uniform_ = $Uniform$Type;
}}
declare module "packages/com/qendolin/betterclouds/clouds/shaders/$Shader" {
import {$AutoCloseable, $AutoCloseable$Type} from "packages/java/lang/$AutoCloseable"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$ResourceManager, $ResourceManager$Type} from "packages/net/minecraft/server/packs/resources/$ResourceManager"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $Shader implements $AutoCloseable {

constructor(resMan: $ResourceManager$Type, vshId: $ResourceLocation$Type, fshId: $ResourceLocation$Type, defs: $Map$Type<(string), (string)>)

public "glId"(): integer
public "isIncomplete"(): boolean
public "bind"(): void
public "close"(): void
get "incomplete"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Shader$Type = ($Shader);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Shader_ = $Shader$Type;
}}
declare module "packages/com/qendolin/betterclouds/clouds/shaders/$CoverageShader" {
import {$Uniform, $Uniform$Type} from "packages/com/qendolin/betterclouds/clouds/shaders/$Uniform"
import {$Shader, $Shader$Type} from "packages/com/qendolin/betterclouds/clouds/shaders/$Shader"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$ResourceManager, $ResourceManager$Type} from "packages/net/minecraft/server/packs/resources/$ResourceManager"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $CoverageShader extends $Shader {
static readonly "DEF_SIZE_XZ_KEY": string
static readonly "DEF_SIZE_Y_KEY": string
static readonly "DEF_POSITIONAL_COLORING": string
static readonly "DEF_DISTANT_HORIZONS": string
static readonly "DEF_WORLD_CURVATURE": string
static readonly "VERTEX_SHADER_ID": $ResourceLocation
static readonly "FRAGMENT_SHADER_ID": $ResourceLocation
readonly "uDepthTexture": $Uniform
readonly "uDhDepthTexture": $Uniform
readonly "uNoiseTexture": $Uniform
readonly "uMVPMatrix": $Uniform
readonly "uMVMatrix": $Uniform
readonly "uMcPMatrix": $Uniform
readonly "uDhPMatrix": $Uniform
readonly "uOriginOffset": $Uniform
readonly "uBoundingBox": $Uniform
readonly "uTime": $Uniform
readonly "uMiscellaneous": $Uniform
readonly "uFogRange": $Uniform

constructor(resMan: $ResourceManager$Type, defs: $Map$Type<(string), (string)>)

public static "create"(manager: $ResourceManager$Type, sizeXZ: float, sizeY: float, stencilFallback: boolean, dhCompat: boolean, worldCurvatureSize: integer): $CoverageShader
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CoverageShader$Type = ($CoverageShader);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CoverageShader_ = $CoverageShader$Type;
}}
declare module "packages/com/qendolin/betterclouds/clouds/shaders/$ShadingShader" {
import {$Uniform, $Uniform$Type} from "packages/com/qendolin/betterclouds/clouds/shaders/$Uniform"
import {$Shader, $Shader$Type} from "packages/com/qendolin/betterclouds/clouds/shaders/$Shader"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$ResourceManager, $ResourceManager$Type} from "packages/net/minecraft/server/packs/resources/$ResourceManager"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ShadingShader extends $Shader {
static readonly "VERTEX_SHADER_ID": $ResourceLocation
static readonly "FRAGMENT_SHADER_ID": $ResourceLocation
static readonly "DEF_BLIT_DEPTH_KEY": string
static readonly "DEF_UINT_COVERAGE_KEY": string
static readonly "DEF_CELESTIAL_BODY_HALO_KEY": string
readonly "uDataTexture": $Uniform
readonly "uDepthTexture": $Uniform
readonly "uCoverageTexture": $Uniform
readonly "uLightTexture": $Uniform
readonly "uVPMatrix": $Uniform
readonly "uSunDirection": $Uniform
readonly "uSunAxis": $Uniform
readonly "uColorGrading": $Uniform
readonly "uOpacity": $Uniform
readonly "uTint": $Uniform
readonly "uNoiseFactor": $Uniform

constructor(resMan: $ResourceManager$Type, defs: $Map$Type<(string), (string)>)

public static "create"(manager: $ResourceManager$Type, depthWriteFallback: boolean, stencilFallback: boolean, enableCelestialBodyHalo: boolean): $ShadingShader
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShadingShader$Type = ($ShadingShader);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ShadingShader_ = $ShadingShader$Type;
}}
declare module "packages/com/qendolin/betterclouds/config/$ShaderPresetConfig" {
import {$InstanceCreator, $InstanceCreator$Type} from "packages/com/google/gson/$InstanceCreator"

export class $ShaderPresetConfig {
static readonly "INSTANCE_CREATOR": $InstanceCreator<($ShaderPresetConfig)>
 "title": string
 "key": string
 "editable": boolean
 "upscaleResolutionFactor": float
 "gamma": float
 "sunPathAngle": float
 "sunriseStartTime": integer
 "sunriseEndTime": integer
 "sunsetStartTime": integer
 "sunsetEndTime": integer
 "dayBrightness": float
 "nightBrightness": float
 "saturation": float
 "opacity": float
 "opacityFactor": float
 "opacityExponent": float
 "tintRed": float
 "tintGreen": float
 "tintBlue": float
 "worldCurvatureSize": integer

constructor()
constructor(other: $ShaderPresetConfig$Type)
constructor(title: string)

public "markAsCopy"(): void
public "isEqualTo"(other: $ShaderPresetConfig$Type): boolean
public "gamma"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShaderPresetConfig$Type = ($ShaderPresetConfig);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ShaderPresetConfig_ = $ShaderPresetConfig$Type;
}}
declare module "packages/com/qendolin/betterclouds/clouds/shaders/$DebugShader" {
import {$Uniform, $Uniform$Type} from "packages/com/qendolin/betterclouds/clouds/shaders/$Uniform"
import {$Shader, $Shader$Type} from "packages/com/qendolin/betterclouds/clouds/shaders/$Shader"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$ResourceManager, $ResourceManager$Type} from "packages/net/minecraft/server/packs/resources/$ResourceManager"

export class $DebugShader extends $Shader {
static readonly "VERTEX_SHADER_ID": $ResourceLocation
static readonly "FRAGMENT_SHADER_ID": $ResourceLocation
readonly "uModelViewMatrix": $Uniform
readonly "uProjectionMatrix": $Uniform
readonly "uColorModulator": $Uniform

constructor(resMan: $ResourceManager$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DebugShader$Type = ($DebugShader);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DebugShader_ = $DebugShader$Type;
}}
declare module "packages/com/qendolin/betterclouds/duck/$WorldRendererDuck" {
import {$Renderer, $Renderer$Type} from "packages/com/qendolin/betterclouds/clouds/$Renderer"

export interface $WorldRendererDuck {

 "betterclouds$getRenderer"(): $Renderer

(): $Renderer
}

export namespace $WorldRendererDuck {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WorldRendererDuck$Type = ($WorldRendererDuck);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WorldRendererDuck_ = $WorldRendererDuck$Type;
}}
declare module "packages/com/qendolin/betterclouds/clouds/$Renderer$PrepareResult" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $Renderer$PrepareResult extends $Enum<($Renderer$PrepareResult)> {
static readonly "RENDER": $Renderer$PrepareResult
static readonly "NO_RENDER": $Renderer$PrepareResult
static readonly "FALLBACK": $Renderer$PrepareResult


public static "values"(): ($Renderer$PrepareResult)[]
public static "valueOf"(name: string): $Renderer$PrepareResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Renderer$PrepareResult$Type = (("no_render") | ("render") | ("fallback")) | ($Renderer$PrepareResult);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Renderer$PrepareResult_ = $Renderer$PrepareResult$Type;
}}
declare module "packages/com/qendolin/betterclouds/mixin/runtime/$RenderPhaseAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $RenderPhaseAccessor {

}

export namespace $RenderPhaseAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderPhaseAccessor$Type = ($RenderPhaseAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RenderPhaseAccessor_ = $RenderPhaseAccessor$Type;
}}
declare module "packages/com/qendolin/betterclouds/config/$Config" {
import {$SereneSeasonsConfig, $SereneSeasonsConfig$Type} from "packages/com/qendolin/betterclouds/config/$SereneSeasonsConfig"
import {$FabricSeasonsConfig, $FabricSeasonsConfig$Type} from "packages/com/qendolin/betterclouds/config/$FabricSeasonsConfig"
import {$ShaderPresetConfig, $ShaderPresetConfig$Type} from "packages/com/qendolin/betterclouds/config/$ShaderPresetConfig"
import {$List, $List$Type} from "packages/java/util/$List"
import {$InstanceCreator, $InstanceCreator$Type} from "packages/com/google/gson/$InstanceCreator"
import {$Config$RegistryKeySerializer, $Config$RegistryKeySerializer$Type} from "packages/com/qendolin/betterclouds/config/$Config$RegistryKeySerializer"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$DimensionType, $DimensionType$Type} from "packages/net/minecraft/world/level/dimension/$DimensionType"

export class $Config {
static readonly "DEFAULT_PRESET_KEY": string
static readonly "INSTANCE_CREATOR": $InstanceCreator<($Config)>
static readonly "REGISTRY_KEY_SERIALIZER": $Config$RegistryKeySerializer
 "migrationVersion": integer
 "enabled": boolean
 "distance": float
 "randomPlacement": float
 "fuzziness": float
 "shuffle": boolean
 "yRange": float
 "yOffset": float
 "sparsity": float
 "spacing": float
 "sizeXZ": float
 "sizeY": float
 "travelSpeed": float
 "windEffectFactor": float
 "windSpeedFactor": float
 "colorVariationFactor": float
 "celestialBodyHalo": boolean
 "chunkSize": integer
 "samplingScale": float
 "scaleFalloffMin": float
 "fogRangeFactor": float
 "fogEndFactor": float
 "usePersistentBuffers": boolean
 "useFrustumCulling": boolean
 "irisSupport": boolean
 "cloudOverride": boolean
 "useIrisFBO": boolean
 "selectedPreset": integer
 "presets": $List<($ShaderPresetConfig)>
 "lastTelemetryVersion": integer
 "gpuIncompatibleMessageEnabled": boolean
 "issueReportEnabled": boolean
 "enabledDimensions": $List<($ResourceKey<($DimensionType)>)>
 "sereneSeasonsConfig": $SereneSeasonsConfig
 "fabricSeasonsConfig": $FabricSeasonsConfig

constructor()
constructor(other: $Config$Type)

public static "getDefaultDimensions"(): $List<($ResourceKey<($DimensionType)>)>
public "loadDefaultPresets"(): void
public "sortPresets"(): void
public "addFirstPreset"(): void
public "preset"(): $ShaderPresetConfig
public "blockDistance"(): integer
get "defaultDimensions"(): $List<($ResourceKey<($DimensionType)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Config$Type = ($Config);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Config_ = $Config$Type;
}}
declare module "packages/com/qendolin/betterclouds/clouds/$Renderer" {
import {$ClientLevel, $ClientLevel$Type} from "packages/net/minecraft/client/multiplayer/$ClientLevel"
import {$Minecraft, $Minecraft$Type} from "packages/net/minecraft/client/$Minecraft"
import {$AutoCloseable, $AutoCloseable$Type} from "packages/java/lang/$AutoCloseable"
import {$Resources, $Resources$Type} from "packages/com/qendolin/betterclouds/clouds/$Resources"
import {$Matrix4f, $Matrix4f$Type} from "packages/org/joml/$Matrix4f"
import {$Vector3d, $Vector3d$Type} from "packages/org/joml/$Vector3d"
import {$Frustum, $Frustum$Type} from "packages/net/minecraft/client/renderer/culling/$Frustum"
import {$Renderer$PrepareResult, $Renderer$PrepareResult$Type} from "packages/com/qendolin/betterclouds/clouds/$Renderer$PrepareResult"
import {$ResourceManager, $ResourceManager$Type} from "packages/net/minecraft/server/packs/resources/$ResourceManager"

export class $Renderer implements $AutoCloseable {

constructor(client: $Minecraft$Type)

public "setWorld"(world: $ClientLevel$Type): void
public "reload"(manager: $ResourceManager$Type): void
public "render"(ticks: integer, tickDelta: float, cam: $Vector3d$Type, frustumPos: $Vector3d$Type, frustum: $Frustum$Type): void
public "resources"(): $Resources
public "close"(): void
public "prepare"(viewMat: $Matrix4f$Type, projMat: $Matrix4f$Type, ticks: integer, tickDelta: float, cam: $Vector3d$Type): $Renderer$PrepareResult
set "world"(value: $ClientLevel$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Renderer$Type = ($Renderer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Renderer_ = $Renderer$Type;
}}
declare module "packages/com/qendolin/betterclouds/config/$SereneSeasonsConfig" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $SereneSeasonsConfig {
 "transitionDays": float
 "earlySpringCloudiness": float
 "midSpringCloudiness": float
 "lateSpringCloudiness": float
 "earlySummerCloudiness": float
 "midSummerCloudiness": float
 "lateSummerCloudiness": float
 "earlyAutumnCloudiness": float
 "midAutumnCloudiness": float
 "lateAutumnCloudiness": float
 "earlyWinterCloudiness": float
 "midWinterCloudiness": float
 "lateWinterCloudiness": float

constructor()
constructor(other: $SereneSeasonsConfig$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SereneSeasonsConfig$Type = ($SereneSeasonsConfig);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SereneSeasonsConfig_ = $SereneSeasonsConfig$Type;
}}
declare module "packages/com/qendolin/betterclouds/mixin/runtime/$VertexBufferAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $VertexBufferAccessor {

 "getVertexBufferId"(): integer
 "getIndexBufferId"(): integer
 "getVertexArrayId"(): integer
}

export namespace $VertexBufferAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VertexBufferAccessor$Type = ($VertexBufferAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VertexBufferAccessor_ = $VertexBufferAccessor$Type;
}}
declare module "packages/com/qendolin/betterclouds/clouds/shaders/$ShaderParameters" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$CloudStatus, $CloudStatus$Type} from "packages/net/minecraft/client/$CloudStatus"

export class $ShaderParameters extends $Record {

constructor(cloudRenderMode: $CloudStatus$Type, blockViewDistance: integer, configSizeXZ: float, configSizeY: float, configCelestialBodyHalo: boolean, useDepthWriteFallback: boolean, useStencilTextureFallback: boolean, useDistantHorizonsCompat: boolean, worldCurvatureSize: integer)

public "worldCurvatureSize"(): integer
public "useStencilTextureFallback"(): boolean
public "useDepthWriteFallback"(): boolean
public "configSizeXZ"(): float
public "configSizeY"(): float
public "useDistantHorizonsCompat"(): boolean
public "configCelestialBodyHalo"(): boolean
public "cloudRenderMode"(): $CloudStatus
public "blockViewDistance"(): integer
public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShaderParameters$Type = ($ShaderParameters);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ShaderParameters_ = $ShaderParameters$Type;
}}
declare module "packages/com/qendolin/betterclouds/clouds/$ChunkedGenerator$ChunkIndex" {
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"

export class $ChunkedGenerator$ChunkIndex {

constructor(start: integer, count: integer, bounds: $AABB$Type)

public "count"(): integer
public "start"(): integer
public "bounds"(cloudsHeight: float, sizeXZ: float, sizeY: float): $AABB
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChunkedGenerator$ChunkIndex$Type = ($ChunkedGenerator$ChunkIndex);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChunkedGenerator$ChunkIndex_ = $ChunkedGenerator$ChunkIndex$Type;
}}
