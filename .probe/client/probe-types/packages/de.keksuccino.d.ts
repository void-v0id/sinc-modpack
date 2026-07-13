declare module "packages/de/keksuccino/fancymenu/mixin/mixins/common/client/$IMixinOptions" {
import {$PlayerModelPart, $PlayerModelPart$Type} from "packages/net/minecraft/world/entity/player/$PlayerModelPart"
import {$Options$FieldAccess, $Options$FieldAccess$Type} from "packages/net/minecraft/client/$Options$FieldAccess"
import {$Set, $Set$Type} from "packages/java/util/$Set"

export interface $IMixinOptions {

 "getModelPartsFancyMenu"(): $Set<($PlayerModelPart)>
 "invokeProcessOptionsFancyMenu"(arg0: $Options$FieldAccess$Type): void
}

export namespace $IMixinOptions {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMixinOptions$Type = ($IMixinOptions);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMixinOptions_ = $IMixinOptions$Type;
}}
declare module "packages/de/keksuccino/konkrete/mixin/client/$IMixinEditBox" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IMixinEditBox {

 "getIsEditableKonkrete"(): boolean
 "getHightlightPosKonkrete"(): integer
 "getMaxLengthKonkrete"(): integer
 "onValueChangeKonkrete"(arg0: string): void
}

export namespace $IMixinEditBox {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMixinEditBox$Type = ($IMixinEditBox);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMixinEditBox_ = $IMixinEditBox$Type;
}}
declare module "packages/de/keksuccino/fancymenu/mixin/mixins/common/client/$IMixinAbstractContainerScreen" {
import {$Slot, $Slot$Type} from "packages/net/minecraft/world/inventory/$Slot"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $IMixinAbstractContainerScreen {

 "get_hoveredSlot_FancyMenu"(): $Slot
 "get_draggingItem_FancyMenu"(): $ItemStack
}

export namespace $IMixinAbstractContainerScreen {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMixinAbstractContainerScreen$Type = ($IMixinAbstractContainerScreen);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMixinAbstractContainerScreen_ = $IMixinAbstractContainerScreen$Type;
}}
declare module "packages/de/keksuccino/fancymenu/mixin/mixins/common/client/$IMixinEditBox" {
import {$FormattedCharSequence, $FormattedCharSequence$Type} from "packages/net/minecraft/util/$FormattedCharSequence"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$BiFunction, $BiFunction$Type} from "packages/java/util/function/$BiFunction"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"

export interface $IMixinEditBox {

 "getHighlightPosFancyMenu"(): integer
 "setDisplayPosFancyMenu"(arg0: integer): void
 "invokeDeleteTextFancyMenu"(arg0: integer): void
 "getDisplayPosFancyMenu"(): integer
 "getMaxLengthFancyMenu"(): integer
 "getBorderedFancyMenu"(): boolean
 "getIsEditableFancyMenu"(): boolean
 "getFormatterFancyMenu"(): $BiFunction<(string), (integer), ($FormattedCharSequence)>
 "getTextColorFancyMenu"(): integer
 "getTextColorUneditableFancyMenu"(): integer
 "getFocusedTimeFancyMenu"(): integer
 "getHintFancyMenu"(): $Component
 "getSuggestionFancyMenu"(): string
 "invokeRenderHighlightFancyMenu"(arg0: $GuiGraphics$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer): void
}

export namespace $IMixinEditBox {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMixinEditBox$Type = ($IMixinEditBox);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMixinEditBox_ = $IMixinEditBox$Type;
}}
declare module "packages/de/keksuccino/fancymenu/util/rendering/ui/widget/$CustomizableWidget$CustomBackgroundResetBehavior" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $CustomizableWidget$CustomBackgroundResetBehavior extends $Enum<($CustomizableWidget$CustomBackgroundResetBehavior)> {
static readonly "RESET_NEVER": $CustomizableWidget$CustomBackgroundResetBehavior
static readonly "RESET_ON_HOVER": $CustomizableWidget$CustomBackgroundResetBehavior
static readonly "RESET_ON_UNHOVER": $CustomizableWidget$CustomBackgroundResetBehavior
static readonly "RESET_ON_HOVER_AND_UNHOVER": $CustomizableWidget$CustomBackgroundResetBehavior


public static "values"(): ($CustomizableWidget$CustomBackgroundResetBehavior)[]
public static "valueOf"(arg0: string): $CustomizableWidget$CustomBackgroundResetBehavior
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomizableWidget$CustomBackgroundResetBehavior$Type = (("reset_on_unhover") | ("reset_on_hover_and_unhover") | ("reset_never") | ("reset_on_hover")) | ($CustomizableWidget$CustomBackgroundResetBehavior);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CustomizableWidget$CustomBackgroundResetBehavior_ = $CustomizableWidget$CustomBackgroundResetBehavior$Type;
}}
declare module "packages/de/keksuccino/fancymenu/mixin/mixins/common/client/$IMixinGui" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"

export interface $IMixinGui {

 "get_title_FancyMenu"(): $Component
 "get_subtitle_FancyMenu"(): $Component
 "get_overlayMessageString_FancyMenu"(): $Component
 "get_overlayMessageTime_FancyMenu"(): integer
 "get_toolHighlightTimer_FancyMenu"(): integer
}

export namespace $IMixinGui {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMixinGui$Type = ($IMixinGui);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMixinGui_ = $IMixinGui$Type;
}}
declare module "packages/de/keksuccino/fancymenu/util/resource/$Resource" {
import {$Closeable, $Closeable$Type} from "packages/java/io/$Closeable"
import {$InputStream, $InputStream$Type} from "packages/java/io/$InputStream"

export interface $Resource extends $Closeable {

 "waitForLoadingCompletedOrFailed"(arg0: long): void
 "isLoadingCompleted"(): boolean
 "isLoadingFailed"(): boolean
 "isReady"(): boolean
 "isClosed"(): boolean
 "waitForReady"(arg0: long): void
 "open"(): $InputStream
 "close"(): void
}

export namespace $Resource {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Resource$Type = ($Resource);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Resource_ = $Resource$Type;
}}
declare module "packages/de/keksuccino/fancymenu/mixin/mixins/common/client/$IMixinNativeImage" {
import {$WritableByteChannel, $WritableByteChannel$Type} from "packages/java/nio/channels/$WritableByteChannel"

export interface $IMixinNativeImage {

 "get_pixels_FancyMenu"(): long
 "invoke_writeToChannel_FancyMenu"(arg0: $WritableByteChannel$Type): boolean
}

export namespace $IMixinNativeImage {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMixinNativeImage$Type = ($IMixinNativeImage);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMixinNativeImage_ = $IMixinNativeImage$Type;
}}
declare module "packages/de/keksuccino/fancymenu/mixin/mixins/common/client/$IMixinGameRenderer" {
import {$PostChain, $PostChain$Type} from "packages/net/minecraft/client/renderer/$PostChain"

export interface $IMixinGameRenderer {

 "getBlurEffect_FancyMenu"(): $PostChain

(): $PostChain
}

export namespace $IMixinGameRenderer {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMixinGameRenderer$Type = ($IMixinGameRenderer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMixinGameRenderer_ = $IMixinGameRenderer$Type;
}}
declare module "packages/de/keksuccino/fancymenu/mixin/mixins/common/client/$IMixinSplashRenderer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IMixinSplashRenderer {

 "getSplashFancyMenu"(): string

(): string
}

export namespace $IMixinSplashRenderer {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMixinSplashRenderer$Type = ($IMixinSplashRenderer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMixinSplashRenderer_ = $IMixinSplashRenderer$Type;
}}
declare module "packages/de/keksuccino/fancymenu/util/rendering/ui/widget/$CustomizableWidget" {
import {$IAudio, $IAudio$Type} from "packages/de/keksuccino/fancymenu/util/resource/resources/audio/$IAudio"
import {$AbstractWidget, $AbstractWidget$Type} from "packages/net/minecraft/client/gui/components/$AbstractWidget"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$List, $List$Type} from "packages/java/util/$List"
import {$CustomizableWidget$CustomBackgroundResetBehavior, $CustomizableWidget$CustomBackgroundResetBehavior$Type} from "packages/de/keksuccino/fancymenu/util/rendering/ui/widget/$CustomizableWidget$CustomBackgroundResetBehavior"
import {$RenderableResource, $RenderableResource$Type} from "packages/de/keksuccino/fancymenu/util/resource/$RenderableResource"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$DrawableColor, $DrawableColor$Type} from "packages/de/keksuccino/fancymenu/util/rendering/$DrawableColor"

export interface $CustomizableWidget {

 "tickFocusStateListenersFancyMenu"(arg0: boolean): void
 "isHiddenFancyMenu"(): boolean
 "resetWidgetCustomizationsFancyMenu"(): void
 "resetWidgetSizeAndPositionFancyMenu"(): void
 "tickHoverStateListenersFancyMenu"(arg0: boolean): void
 "tickHoverOrFocusStateListenersFancyMenu"(arg0: boolean): void
 "resolveLabelScaleFancyMenu"(): float
 "addHoverOrFocusStateListenerFancyMenu"(arg0: $Consumer$Type<(boolean)>): void
 "addResetCustomizationsListenerFancyMenu"(arg0: $Runnable$Type): void
 "getResetCustomizationsListenersFancyMenu"(): $List<($Runnable)>
 "addHoverStateListenerFancyMenu"(arg0: $Consumer$Type<(boolean)>): void
 "addFocusStateListenerFancyMenu"(arg0: $Consumer$Type<(boolean)>): void
 "getHoverStateListenersFancyMenu"(): $List<($Consumer<(boolean)>)>
 "getFocusStateListenersFancyMenu"(): $List<($Consumer<(boolean)>)>
 "getHoverOrFocusStateListenersFancyMenu"(): $List<($Consumer<(boolean)>)>
 "getLastHoverStateFancyMenu"(): boolean
 "setLastHoverStateFancyMenu"(arg0: boolean): void
 "getLastFocusStateFancyMenu"(): boolean
 "setLastFocusStateFancyMenu"(arg0: boolean): void
 "getLastHoverOrFocusStateFancyMenu"(): boolean
 "setLastHoverOrFocusStateFancyMenu"(arg0: boolean): void
 "getCustomBackgroundNormalFancyMenu"(): $RenderableResource
 "getCustomBackgroundHoverFancyMenu"(): $RenderableResource
 "getCustomBackgroundInactiveFancyMenu"(): $RenderableResource
 "setCustomBackgroundNormalFancyMenu"(arg0: $RenderableResource$Type): void
 "setCustomBackgroundHoverFancyMenu"(arg0: $RenderableResource$Type): void
 "setCustomBackgroundInactiveFancyMenu"(arg0: $RenderableResource$Type): void
 "setCustomBackgroundResetBehaviorFancyMenu"(arg0: $CustomizableWidget$CustomBackgroundResetBehavior$Type): void
 "setHoverSoundFancyMenu"(arg0: $IAudio$Type): void
 "setUnhoverSoundFancyMenu"(arg0: $IAudio$Type): void
 "setCustomClickSoundFancyMenu"(arg0: $IAudio$Type): void
 "setHiddenFancyMenu"(arg0: boolean): void
 "setCustomLabelFancyMenu"(arg0: $Component$Type): void
 "setHoverLabelFancyMenu"(arg0: $Component$Type): void
 "setUnderlineLabelOnHoverFancyMenu"(arg0: boolean): void
 "setLabelShadowFancyMenu"(arg0: boolean): void
 "setLabelHoverColorFancyMenu"(arg0: $DrawableColor$Type): void
 "setLabelBaseColorFancyMenu"(arg0: $DrawableColor$Type): void
 "setLabelScaleFancyMenu"(arg0: float): void
 "setCustomWidthFancyMenu"(arg0: integer): void
 "setCustomHeightFancyMenu"(arg0: integer): void
 "setCustomXFancyMenu"(arg0: integer): void
 "setCustomYFancyMenu"(arg0: integer): void
 "setHitboxRotationFancyMenu"(arg0: float, arg1: float, arg2: float): void
 "getCustomLabelFancyMenu"(): $Component
 "getHoverLabelFancyMenu"(): $Component
 "isUnderlineLabelOnHoverFancyMenu"(): boolean
 "isLabelShadowFancyMenu"(): boolean
 "getLabelHoverColorFancyMenu"(): $DrawableColor
 "getLabelBaseColorFancyMenu"(): $DrawableColor
 "getLabelScaleFancyMenu"(): float
 "getCustomClickSoundFancyMenu"(): $IAudio
 "getHoverSoundFancyMenu"(): $IAudio
 "getUnhoverSoundFancyMenu"(): $IAudio
 "setNineSliceCustomBackground_FancyMenu"(arg0: boolean): void
 "isNineSliceCustomBackgroundTexture_FancyMenu"(): boolean
 "setNineSliceBorderX_FancyMenu"(arg0: integer): void
 "getNineSliceCustomBackgroundBorderX_FancyMenu"(): integer
 "setNineSliceBorderY_FancyMenu"(arg0: integer): void
 "getNineSliceCustomBackgroundBorderY_FancyMenu"(): integer
 "setNineSliceBorderTop_FancyMenu"(arg0: integer): void
 "getNineSliceCustomBackgroundBorderTop_FancyMenu"(): integer
 "setNineSliceBorderRight_FancyMenu"(arg0: integer): void
 "getNineSliceCustomBackgroundBorderRight_FancyMenu"(): integer
 "setNineSliceBorderBottom_FancyMenu"(arg0: integer): void
 "getNineSliceCustomBackgroundBorderBottom_FancyMenu"(): integer
 "setNineSliceBorderLeft_FancyMenu"(arg0: integer): void
 "getNineSliceCustomBackgroundBorderLeft_FancyMenu"(): integer
 "getCustomBackgroundResetBehaviorFancyMenu"(): $CustomizableWidget$CustomBackgroundResetBehavior
 "getCustomWidthFancyMenu"(): integer
 "getCustomHeightFancyMenu"(): integer
 "getCustomXFancyMenu"(): integer
 "getCustomYFancyMenu"(): integer
 "getHitboxRotationDegreesFancyMenu"(): float
 "getHitboxVerticalTiltDegreesFancyMenu"(): float
 "getHitboxHorizontalTiltDegreesFancyMenu"(): float
 "getOriginalMessageFancyMenu"(): $Component
 "renderCustomBackgroundFancyMenu"(arg0: $AbstractWidget$Type, arg1: $GuiGraphics$Type, arg2: integer, arg3: integer, arg4: integer, arg5: integer): boolean
 "stopCustomClickSoundFancyMenu"(): void
 "stopHoverSoundFancyMenu"(): void
 "stopUnhoverSoundFancyMenu"(): void
}

export namespace $CustomizableWidget {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomizableWidget$Type = ($CustomizableWidget);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CustomizableWidget_ = $CustomizableWidget$Type;
}}
declare module "packages/de/keksuccino/fancymenu/mixin/mixins/common/client/$IMixinVanillaPackResources" {
import {$PackType, $PackType$Type} from "packages/net/minecraft/server/packs/$PackType"
import {$Path, $Path$Type} from "packages/java/nio/file/$Path"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $IMixinVanillaPackResources {

 "getPathsForType_FancyMenu"(): $Map<($PackType), ($List<($Path)>)>
 "getRootPaths_FancyMenu"(): $List<($Path)>
}

export namespace $IMixinVanillaPackResources {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMixinVanillaPackResources$Type = ($IMixinVanillaPackResources);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMixinVanillaPackResources_ = $IMixinVanillaPackResources$Type;
}}
declare module "packages/de/keksuccino/fancymenu/util/rendering/$DrawableColor$FloatColor" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"

export class $DrawableColor$FloatColor extends $Record {

constructor(red: float, green: float, blue: float, alpha: float)

public "red"(): float
public "blue"(): float
public "green"(): float
public "alpha"(): float
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DrawableColor$FloatColor$Type = ($DrawableColor$FloatColor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DrawableColor$FloatColor_ = $DrawableColor$FloatColor$Type;
}}
declare module "packages/de/keksuccino/spiffyhud/util/rendering/exclusion/$IGuiGraphicsExclusionArea" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IGuiGraphicsExclusionArea {

 "spiffyHud$pushExclusionArea"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): void
 "spiffyHud$popExclusionArea"(): void
 "spiffyHud$clearExclusionAreas"(): void
 "spiffyHud$hasExclusionAreas"(): boolean
 "spiffyHud$popAllExclusionAreas"(): integer
}

export namespace $IGuiGraphicsExclusionArea {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IGuiGraphicsExclusionArea$Type = ($IGuiGraphicsExclusionArea);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IGuiGraphicsExclusionArea_ = $IGuiGraphicsExclusionArea$Type;
}}
declare module "packages/de/keksuccino/fancymenu/util/rendering/$AspectRatio" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $AspectRatio {

constructor(arg0: integer, arg1: integer)

public "getAspectRatioSizeByMaximumSize"(arg0: integer, arg1: integer): (integer)[]
public "getAspectRatioHeight"(arg0: integer): integer
public "getAspectRatioWidth"(arg0: integer): integer
public "getInputWidth"(): integer
public "getInputHeight"(): integer
public "getAspectRatioSizeByMinimumSize"(arg0: integer, arg1: integer): (integer)[]
get "inputWidth"(): integer
get "inputHeight"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AspectRatio$Type = ($AspectRatio);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AspectRatio_ = $AspectRatio$Type;
}}
declare module "packages/de/keksuccino/fancymenu/mixin/mixins/common/client/$IMixinGuiGraphics" {
import {$MultiBufferSource$BufferSource, $MultiBufferSource$BufferSource$Type} from "packages/net/minecraft/client/renderer/$MultiBufferSource$BufferSource"

export interface $IMixinGuiGraphics {

 "getBufferSource_FancyMenu"(): $MultiBufferSource$BufferSource

(): $MultiBufferSource$BufferSource
}

export namespace $IMixinGuiGraphics {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMixinGuiGraphics$Type = ($IMixinGuiGraphics);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMixinGuiGraphics_ = $IMixinGuiGraphics$Type;
}}
declare module "packages/de/keksuccino/fancymenu/util/rendering/ui/widget/$UniqueWidget" {
import {$AbstractWidget, $AbstractWidget$Type} from "packages/net/minecraft/client/gui/components/$AbstractWidget"

export interface $UniqueWidget {

 "setWidgetIdentifierFancyMenu"(arg0: string): $AbstractWidget
 "getWidgetIdentifierFancyMenu"(): string
}

export namespace $UniqueWidget {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UniqueWidget$Type = ($UniqueWidget);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UniqueWidget_ = $UniqueWidget$Type;
}}
declare module "packages/de/keksuccino/fancymenu/util/rendering/ui/screen/$CustomizableScreen" {
import {$GuiEventListener, $GuiEventListener$Type} from "packages/net/minecraft/client/gui/components/events/$GuiEventListener"
import {$List, $List$Type} from "packages/java/util/$List"

export interface $CustomizableScreen {

 "removeOnInitChildrenFancyMenu"(): $List<($GuiEventListener)>

(): $List<($GuiEventListener)>
}

export namespace $CustomizableScreen {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomizableScreen$Type = ($CustomizableScreen);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CustomizableScreen_ = $CustomizableScreen$Type;
}}
declare module "packages/de/keksuccino/spiffyhud/mixin/mixins/common/client/$IMixinSynchedEntityData" {
import {$SynchedEntityData$DataItem, $SynchedEntityData$DataItem$Type} from "packages/net/minecraft/network/syncher/$SynchedEntityData$DataItem"
import {$Int2ObjectMap, $Int2ObjectMap$Type} from "packages/it/unimi/dsi/fastutil/ints/$Int2ObjectMap"

export interface $IMixinSynchedEntityData {

 "get_itemsById_Spiffy"(): $Int2ObjectMap<($SynchedEntityData$DataItem<(any)>)>

(): $Int2ObjectMap<($SynchedEntityData$DataItem<(any)>)>
}

export namespace $IMixinSynchedEntityData {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMixinSynchedEntityData$Type = ($IMixinSynchedEntityData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMixinSynchedEntityData_ = $IMixinSynchedEntityData$Type;
}}
declare module "packages/de/keksuccino/konkrete/mixin/client/$IMixinScreen" {
import {$Font, $Font$Type} from "packages/net/minecraft/client/gui/$Font"
import {$GuiEventListener, $GuiEventListener$Type} from "packages/net/minecraft/client/gui/components/events/$GuiEventListener"
import {$Renderable, $Renderable$Type} from "packages/net/minecraft/client/gui/components/$Renderable"
import {$List, $List$Type} from "packages/java/util/$List"

export interface $IMixinScreen {

 "setFontKonkrete"(arg0: $Font$Type): void
 "getRenderablesKonkrete"(): $List<($Renderable)>
 "getChildrenKonkrete"(): $List<($GuiEventListener)>
}

export namespace $IMixinScreen {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMixinScreen$Type = ($IMixinScreen);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMixinScreen_ = $IMixinScreen$Type;
}}
declare module "packages/de/keksuccino/fancymenu/mixin/mixins/common/client/$IMixinBossHealthOverlay" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$LerpingBossEvent, $LerpingBossEvent$Type} from "packages/net/minecraft/client/gui/components/$LerpingBossEvent"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $IMixinBossHealthOverlay {

 "get_events_FancyMenu"(): $Map<($UUID), ($LerpingBossEvent)>

(): $Map<($UUID), ($LerpingBossEvent)>
}

export namespace $IMixinBossHealthOverlay {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMixinBossHealthOverlay$Type = ($IMixinBossHealthOverlay);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMixinBossHealthOverlay_ = $IMixinBossHealthOverlay$Type;
}}
declare module "packages/de/keksuccino/spiffyhud/mixin/mixins/common/client/$IMixinSpectatorGui" {
import {$SpectatorMenu, $SpectatorMenu$Type} from "packages/net/minecraft/client/gui/spectator/$SpectatorMenu"

export interface $IMixinSpectatorGui {

 "invoke_getHotbarAlpha_Spiffy"(): float
 "get_menu_Spiffy"(): $SpectatorMenu
}

export namespace $IMixinSpectatorGui {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMixinSpectatorGui$Type = ($IMixinSpectatorGui);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMixinSpectatorGui_ = $IMixinSpectatorGui$Type;
}}
declare module "packages/de/keksuccino/fancymenu/mixin/mixins/common/client/$IMixinScreen" {
import {$GuiEventListener, $GuiEventListener$Type} from "packages/net/minecraft/client/gui/components/events/$GuiEventListener"
import {$Renderable, $Renderable$Type} from "packages/net/minecraft/client/gui/components/$Renderable"
import {$List, $List$Type} from "packages/java/util/$List"
import {$NarratableEntry, $NarratableEntry$Type} from "packages/net/minecraft/client/gui/narration/$NarratableEntry"

export interface $IMixinScreen {

 "getChildrenFancyMenu"(): $List<($GuiEventListener)>
 "getRenderablesFancyMenu"(): $List<($Renderable)>
 "getNarratablesFancyMenu"(): $List<($NarratableEntry)>
 "invokeRemoveWidgetFancyMenu"(arg0: $GuiEventListener$Type): void
 "get_initialized_FancyMenu"(): boolean
 "invoke_init_FancyMenu"(): void
}

export namespace $IMixinScreen {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMixinScreen$Type = ($IMixinScreen);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMixinScreen_ = $IMixinScreen$Type;
}}
declare module "packages/de/keksuccino/fancymenu/mixin/mixins/common/client/$IMixinAbstractWidget" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"

export interface $IMixinAbstractWidget {

 "getAlphaFancyMenu"(): float
 "setHeightFancyMenu"(arg0: integer): void
 "setMessageFieldFancyMenu"(arg0: $Component$Type): void
}

export namespace $IMixinAbstractWidget {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMixinAbstractWidget$Type = ($IMixinAbstractWidget);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMixinAbstractWidget_ = $IMixinAbstractWidget$Type;
}}
declare module "packages/de/keksuccino/fancymenu/util/resource/$RenderableResource" {
import {$Resource, $Resource$Type} from "packages/de/keksuccino/fancymenu/util/resource/$Resource"
import {$AspectRatio, $AspectRatio$Type} from "packages/de/keksuccino/fancymenu/util/rendering/$AspectRatio"
import {$InputStream, $InputStream$Type} from "packages/java/io/$InputStream"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $RenderableResource extends $Resource {

 "getWidth"(): integer
 "getHeight"(): integer
 "getResourceLocation"(): $ResourceLocation
 "getAspectRatio"(): $AspectRatio
 "reset"(): void
 "waitForLoadingCompletedOrFailed"(arg0: long): void
 "isLoadingCompleted"(): boolean
 "isLoadingFailed"(): boolean
 "isReady"(): boolean
 "isClosed"(): boolean
 "waitForReady"(arg0: long): void
 "open"(): $InputStream
 "close"(): void
}

export namespace $RenderableResource {
const MISSING_TEXTURE_LOCATION: $ResourceLocation
const FULLY_TRANSPARENT_TEXTURE: $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderableResource$Type = ($RenderableResource);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RenderableResource_ = $RenderableResource$Type;
}}
declare module "packages/de/keksuccino/drippyloadingscreen/mixin/mixins/common/client/$IMixinMinecraft" {
import {$FontManager, $FontManager$Type} from "packages/net/minecraft/client/gui/font/$FontManager"

export interface $IMixinMinecraft {

 "getFontManagerDrippy"(): $FontManager

(): $FontManager
}

export namespace $IMixinMinecraft {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMixinMinecraft$Type = ($IMixinMinecraft);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMixinMinecraft_ = $IMixinMinecraft$Type;
}}
declare module "packages/de/keksuccino/fancymenu/mixin/mixins/common/client/$IMixinButton" {
import {$Button$OnPress, $Button$OnPress$Type} from "packages/net/minecraft/client/gui/components/$Button$OnPress"

export interface $IMixinButton {

 "setPressActionFancyMenu"(arg0: $Button$OnPress$Type): void

(arg0: $Button$OnPress$Type): void
}

export namespace $IMixinButton {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMixinButton$Type = ($IMixinButton);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMixinButton_ = $IMixinButton$Type;
}}
declare module "packages/de/keksuccino/fancymenu/mixin/mixins/common/client/$IMixinBlendMode" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IMixinBlendMode {

}

export namespace $IMixinBlendMode {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMixinBlendMode$Type = ($IMixinBlendMode);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMixinBlendMode_ = $IMixinBlendMode$Type;
}}
declare module "packages/de/keksuccino/fancymenu/util/rendering/$DrawableColor" {
import {$DrawableColor$FloatColor, $DrawableColor$FloatColor$Type} from "packages/de/keksuccino/fancymenu/util/rendering/$DrawableColor$FloatColor"
import {$Color, $Color$Type} from "packages/java/awt/$Color"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"

export class $DrawableColor {
static readonly "EMPTY": $DrawableColor
static readonly "WHITE": $DrawableColor
static readonly "BLACK": $DrawableColor
static readonly "FULLY_TRANSPARENT": $DrawableColor


public "getHex"(): string
public static "ofHtml"(arg0: string): $DrawableColor
public "setAsShaderColor"(arg0: $GuiGraphics$Type): void
public "setAsShaderColor"(arg0: $GuiGraphics$Type, arg1: float): void
public "getAsFloats"(): $DrawableColor$FloatColor
public "resetShaderColor"(arg0: $GuiGraphics$Type): void
public "getColorInt"(): integer
public "getColorIntWithAlpha"(arg0: float): integer
public "getColor"(): $Color
public "toString"(): string
public static "of"(arg0: integer): $DrawableColor
public static "of"(arg0: $Color$Type): $DrawableColor
public static "of"(arg0: string): $DrawableColor
public static "of"(arg0: integer, arg1: integer, arg2: integer): $DrawableColor
public static "of"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): $DrawableColor
public "copy"(): $DrawableColor
get "hex"(): string
set "asShaderColor"(value: $GuiGraphics$Type)
get "asFloats"(): $DrawableColor$FloatColor
get "colorInt"(): integer
get "color"(): $Color
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DrawableColor$Type = ($DrawableColor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DrawableColor_ = $DrawableColor$Type;
}}
declare module "packages/de/keksuccino/fancymenu/mixin/mixins/common/client/$IMixinMusicManager" {
import {$SoundInstance, $SoundInstance$Type} from "packages/net/minecraft/client/resources/sounds/$SoundInstance"

export interface $IMixinMusicManager {

 "getCurrentMusic_FancyMenu"(): $SoundInstance

(): $SoundInstance
}

export namespace $IMixinMusicManager {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMixinMusicManager$Type = ($IMixinMusicManager);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMixinMusicManager_ = $IMixinMusicManager$Type;
}}
declare module "packages/de/keksuccino/fancymenu/mixin/mixins/common/client/$IMixinMinecraft" {
import {$ResourceLoadStateTracker, $ResourceLoadStateTracker$Type} from "packages/net/minecraft/client/$ResourceLoadStateTracker"

export interface $IMixinMinecraft {

 "openChatScreenFancyMenu"(arg0: string): void
 "getReloadStateTrackerFancyMenu"(): $ResourceLoadStateTracker
 "getPausePartialTickFancyMenu"(): float
}

export namespace $IMixinMinecraft {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMixinMinecraft$Type = ($IMixinMinecraft);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMixinMinecraft_ = $IMixinMinecraft$Type;
}}
declare module "packages/de/keksuccino/fancymenu/util/resource/resources/audio/$PlayableResourceWithAudio" {
import {$InputStream, $InputStream$Type} from "packages/java/io/$InputStream"
import {$PlayableResource, $PlayableResource$Type} from "packages/de/keksuccino/fancymenu/util/resource/$PlayableResource"

export interface $PlayableResourceWithAudio extends $PlayableResource {

 "getVolume"(): float
 "setVolume"(arg0: float): void
 "isPaused"(): boolean
 "pause"(): void
 "play"(): void
 "isPlaying"(): boolean
 "stop"(): void
 "waitForLoadingCompletedOrFailed"(arg0: long): void
 "isLoadingCompleted"(): boolean
 "isLoadingFailed"(): boolean
 "isReady"(): boolean
 "isClosed"(): boolean
 "waitForReady"(arg0: long): void
 "open"(): $InputStream
 "close"(): void
}

export namespace $PlayableResourceWithAudio {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayableResourceWithAudio$Type = ($PlayableResourceWithAudio);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlayableResourceWithAudio_ = $PlayableResourceWithAudio$Type;
}}
declare module "packages/de/keksuccino/melody/mixin/mixins/common/client/$IMixinSoundEngine" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IMixinSoundEngine {

 "getLoadedMelody"(): boolean

(): boolean
}

export namespace $IMixinSoundEngine {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMixinSoundEngine$Type = ($IMixinSoundEngine);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMixinSoundEngine_ = $IMixinSoundEngine$Type;
}}
declare module "packages/de/keksuccino/fancymenu/mixin/mixins/common/client/$IMixinSpectatorGui" {
import {$SpectatorMenu, $SpectatorMenu$Type} from "packages/net/minecraft/client/gui/spectator/$SpectatorMenu"

export interface $IMixinSpectatorGui {

 "get_menu_FancyMenu"(): $SpectatorMenu
 "invoke_getHotbarAlpha_FancyMenu"(): float
}

export namespace $IMixinSpectatorGui {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMixinSpectatorGui$Type = ($IMixinSpectatorGui);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMixinSpectatorGui_ = $IMixinSpectatorGui$Type;
}}
declare module "packages/de/keksuccino/fancymenu/util/resource/$PlayableResource" {
import {$Resource, $Resource$Type} from "packages/de/keksuccino/fancymenu/util/resource/$Resource"
import {$InputStream, $InputStream$Type} from "packages/java/io/$InputStream"

export interface $PlayableResource extends $Resource {

 "isPaused"(): boolean
 "pause"(): void
 "play"(): void
 "isPlaying"(): boolean
 "stop"(): void
 "waitForLoadingCompletedOrFailed"(arg0: long): void
 "isLoadingCompleted"(): boolean
 "isLoadingFailed"(): boolean
 "isReady"(): boolean
 "isClosed"(): boolean
 "waitForReady"(arg0: long): void
 "open"(): $InputStream
 "close"(): void
}

export namespace $PlayableResource {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayableResource$Type = ($PlayableResource);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlayableResource_ = $PlayableResource$Type;
}}
declare module "packages/de/keksuccino/fancymenu/util/resource/resources/audio/$IAudio" {
import {$InputStream, $InputStream$Type} from "packages/java/io/$InputStream"
import {$PlayableResourceWithAudio, $PlayableResourceWithAudio$Type} from "packages/de/keksuccino/fancymenu/util/resource/resources/audio/$PlayableResourceWithAudio"
import {$SoundSource, $SoundSource$Type} from "packages/net/minecraft/sounds/$SoundSource"

export interface $IAudio extends $PlayableResourceWithAudio {

 "setSoundChannel"(arg0: $SoundSource$Type): void
 "getSoundChannel"(): $SoundSource
 "getPlayTime"(): float
 "getDuration"(): float
 "setPlayTime"(arg0: float): void
 "play"(): void
 "getVolume"(): float
 "setVolume"(arg0: float): void
 "isPaused"(): boolean
 "pause"(): void
 "isPlaying"(): boolean
 "stop"(): void
 "waitForLoadingCompletedOrFailed"(arg0: long): void
 "isLoadingCompleted"(): boolean
 "isLoadingFailed"(): boolean
 "isReady"(): boolean
 "isClosed"(): boolean
 "waitForReady"(arg0: long): void
 "open"(): $InputStream
 "close"(): void
}

export namespace $IAudio {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IAudio$Type = ($IAudio);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IAudio_ = $IAudio$Type;
}}
declare module "packages/de/keksuccino/melody/mixin/mixins/common/client/$IMixinSoundManager" {
import {$SoundEngine, $SoundEngine$Type} from "packages/net/minecraft/client/sounds/$SoundEngine"

export interface $IMixinSoundManager {

 "getSoundEngineMelody"(): $SoundEngine

(): $SoundEngine
}

export namespace $IMixinSoundManager {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMixinSoundManager$Type = ($IMixinSoundManager);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMixinSoundManager_ = $IMixinSoundManager$Type;
}}
declare module "packages/de/keksuccino/fancymenu/mixin/mixins/common/client/$IMixinPostChain" {
import {$List, $List$Type} from "packages/java/util/$List"
import {$RenderTarget, $RenderTarget$Type} from "packages/com/mojang/blaze3d/pipeline/$RenderTarget"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$PostPass, $PostPass$Type} from "packages/net/minecraft/client/renderer/$PostPass"

export interface $IMixinPostChain {

 "getScreenTarget_FancyMenu"(): $RenderTarget
 "getCustomRenderTargets_FancyMenu"(): $Map<(string), ($RenderTarget)>
 "getPasses_FancyMenu"(): $List<($PostPass)>
}

export namespace $IMixinPostChain {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMixinPostChain$Type = ($IMixinPostChain);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMixinPostChain_ = $IMixinPostChain$Type;
}}
declare module "packages/de/keksuccino/spiffyhud/mixin/mixins/common/client/$IMixinGui" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"

export interface $IMixinGui {

 "getTickCount_Spiffy"(): integer
 "get_overlayMessageString_Spiffy"(): $Component
 "get_overlayMessageTime_Spiffy"(): integer
 "get_toolHighlightTimer_Spiffy"(): integer
}

export namespace $IMixinGui {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMixinGui$Type = ($IMixinGui);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMixinGui_ = $IMixinGui$Type;
}}
