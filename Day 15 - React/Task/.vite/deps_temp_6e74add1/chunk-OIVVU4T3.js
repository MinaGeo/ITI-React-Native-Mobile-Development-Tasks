import {
  init_DefaultPropsProvider,
  useDefaultProps
} from "./chunk-2SYW6PKP.js";
import {
  _extends,
  _objectWithoutPropertiesLoose,
  clsx_default,
  composeClasses,
  generateUtilityClass,
  generateUtilityClasses,
  init_clsx,
  init_composeClasses,
  init_extends,
  init_generateUtilityClass,
  init_generateUtilityClasses,
  init_objectWithoutPropertiesLoose,
  init_styled,
  require_jsx_runtime,
  require_prop_types,
  styled_default
} from "./chunk-GAOMSIG5.js";
import {
  require_react
} from "./chunk-65KY755N.js";
import {
  __toESM
} from "./chunk-V4OQ3NZ2.js";

// node_modules/@mui/material/CardActions/CardActions.js
init_objectWithoutPropertiesLoose();
init_extends();
var React = __toESM(require_react());
var import_prop_types = __toESM(require_prop_types());
init_clsx();
init_composeClasses();
init_styled();
init_DefaultPropsProvider();

// node_modules/@mui/material/CardActions/cardActionsClasses.js
init_generateUtilityClasses();
init_generateUtilityClass();
function getCardActionsUtilityClass(slot) {
  return generateUtilityClass("MuiCardActions", slot);
}
var cardActionsClasses = generateUtilityClasses("MuiCardActions", ["root", "spacing"]);
var cardActionsClasses_default = cardActionsClasses;

// node_modules/@mui/material/CardActions/CardActions.js
var import_jsx_runtime = __toESM(require_jsx_runtime());
var _excluded = ["disableSpacing", "className"];
var useUtilityClasses = (ownerState) => {
  const {
    classes,
    disableSpacing
  } = ownerState;
  const slots = {
    root: ["root", !disableSpacing && "spacing"]
  };
  return composeClasses(slots, getCardActionsUtilityClass, classes);
};
var CardActionsRoot = styled_default("div", {
  name: "MuiCardActions",
  slot: "Root",
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, !ownerState.disableSpacing && styles.spacing];
  }
})(({
  ownerState
}) => _extends({
  display: "flex",
  alignItems: "center",
  padding: 8
}, !ownerState.disableSpacing && {
  "& > :not(style) ~ :not(style)": {
    marginLeft: 8
  }
}));
var CardActions = React.forwardRef(function CardActions2(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: "MuiCardActions"
  });
  const {
    disableSpacing = false,
    className
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded);
  const ownerState = _extends({}, props, {
    disableSpacing
  });
  const classes = useUtilityClasses(ownerState);
  return (0, import_jsx_runtime.jsx)(CardActionsRoot, _extends({
    className: clsx_default(classes.root, className),
    ownerState,
    ref
  }, other));
});
true ? CardActions.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: import_prop_types.default.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types.default.object,
  /**
   * @ignore
   */
  className: import_prop_types.default.string,
  /**
   * If `true`, the actions do not have additional margin.
   * @default false
   */
  disableSpacing: import_prop_types.default.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types.default.oneOfType([import_prop_types.default.arrayOf(import_prop_types.default.oneOfType([import_prop_types.default.func, import_prop_types.default.object, import_prop_types.default.bool])), import_prop_types.default.func, import_prop_types.default.object])
} : void 0;
var CardActions_default = CardActions;

export {
  getCardActionsUtilityClass,
  cardActionsClasses_default,
  CardActions_default
};
//# sourceMappingURL=chunk-OIVVU4T3.js.map
