import { TouchableOpacity, View } from "react-native";
import Svg, { Path } from "react-native-svg";

interface IconStyleInterface {
  onPress?: VoidFunction;
}

const MenuIcon = ({ onPress }: IconStyleInterface) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Svg viewBox="0 0 448 512" width={30} height={30} style={{}}>
        <Path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z" />
      </Svg>
    </TouchableOpacity>
  );
};

const NotificationIcon = ({ onPress }: IconStyleInterface) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Svg viewBox="0 0 448 512" width={30} height={30} fill={"black"}>
        <Path d="M224 0c-17.7 0-32 14.3-32 32l0 19.2C119 66 64 130.6 64 208l0 18.8c0 47-17.3 92.4-48.5 127.6l-7.4 8.3c-8.4 9.4-10.4 22.9-5.3 34.4S19.4 416 32 416l384 0c12.6 0 24-7.4 29.2-18.9s3.1-25-5.3-34.4l-7.4-8.3C401.3 319.2 384 273.9 384 226.8l0-18.8c0-77.4-55-142-128-156.8L256 32c0-17.7-14.3-32-32-32zm45.3 493.3c12-12 18.7-28.3 18.7-45.3l-64 0-64 0c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7z" />
      </Svg>
    </TouchableOpacity>
  );
};

const CloseIcon = ({ onPress }: IconStyleInterface) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Svg viewBox="0 0 384 512" width={30} height={30}>
        <Path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
      </Svg>
    </TouchableOpacity>
  );
};

const SackMoneyIcon = ({ onPress }: IconStyleInterface) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Svg viewBox="0 0 512 512" width={35} height={35} fill={"#187571ff"}>
        <Path d="M320 96L192 96 144.6 24.9C137.5 14.2 145.1 0 157.9 0L354.1 0c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128l128 0c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96L96 512c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4c0 0 0 0 0 0s0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84 88c0-11-9-20-20-20s-20 9-20 20l0 14c-7.6 1.7-15.2 4.4-22.2 8.5c-13.9 8.3-25.9 22.8-25.8 43.9c.1 20.3 12 33.1 24.7 40.7c11 6.6 24.7 10.8 35.6 14l1.7 .5c12.6 3.8 21.8 6.8 28 10.7c5.1 3.2 5.8 5.4 5.9 8.2c.1 5-1.8 8-5.9 10.5c-5 3.1-12.9 5-21.4 4.7c-11.1-.4-21.5-3.9-35.1-8.5c-2.3-.8-4.7-1.6-7.2-2.4c-10.5-3.5-21.8 2.2-25.3 12.6s2.2 21.8 12.6 25.3c1.9 .6 4 1.3 6.1 2.1c0 0 0 0 0 0s0 0 0 0c8.3 2.9 17.9 6.2 28.2 8.4l0 14.6c0 11 9 20 20 20s20-9 20-20l0-13.8c8-1.7 16-4.5 23.2-9c14.3-8.9 25.1-24.1 24.8-45c-.3-20.3-11.7-33.4-24.6-41.6c-11.5-7.2-25.9-11.6-37.1-15c0 0 0 0 0 0l-.7-.2c-12.8-3.9-21.9-6.7-28.3-10.5c-5.2-3.1-5.3-4.9-5.3-6.7c0-3.7 1.4-6.5 6.2-9.3c5.4-3.2 13.6-5.1 21.5-5c9.6 .1 20.2 2.2 31.2 5.2c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-6.5-1.7-13.7-3.4-21.1-4.7l0-13.9z" />
      </Svg>
    </TouchableOpacity>
  );
};

const SavingIcon = ({ onPress }: IconStyleInterface) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Svg viewBox="0 0 576 512" width={40} height={40} fill={"#187571ff"}>
        <Path d="M400 96l0 .7c-5.3-.4-10.6-.7-16-.7L256 96c-16.5 0-32.5 2.1-47.8 6c-.1-2-.2-4-.2-6c0-53 43-96 96-96s96 43 96 96zm-16 32c3.5 0 7 .1 10.4 .3c4.2 .3 8.4 .7 12.6 1.3C424.6 109.1 450.8 96 480 96l11.5 0c10.4 0 18 9.8 15.5 19.9l-13.8 55.2c15.8 14.8 28.7 32.8 37.5 52.9l13.3 0c17.7 0 32 14.3 32 32l0 96c0 17.7-14.3 32-32 32l-32 0c-9.1 12.1-19.9 22.9-32 32l0 64c0 17.7-14.3 32-32 32l-32 0c-17.7 0-32-14.3-32-32l0-32-128 0 0 32c0 17.7-14.3 32-32 32l-32 0c-17.7 0-32-14.3-32-32l0-64c-34.9-26.2-58.7-66.3-63.2-112L68 304c-37.6 0-68-30.4-68-68s30.4-68 68-68l4 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-4 0c-11 0-20 9-20 20s9 20 20 20l31.2 0c12.1-59.8 57.7-107.5 116.3-122.8c12.9-3.4 26.5-5.2 40.5-5.2l128 0zm64 136a24 24 0 1 0 -48 0 24 24 0 1 0 48 0z" />
      </Svg>
    </TouchableOpacity>
  );
};

const GovernmentIcon = ({ onPress }: IconStyleInterface) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Svg viewBox="0 0 512 512" width={35} height={35} fill={"#187571ff"}>
        <Path d="M248 0l16 0c13.3 0 24 10.7 24 24l0 10.7C368.4 48.1 431.9 111.6 445.3 192l2.7 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L64 256c-17.7 0-32-14.3-32-32s14.3-32 32-32l2.7 0C80.1 111.6 143.6 48.1 224 34.7L224 24c0-13.3 10.7-24 24-24zM64 288l64 0 0 128 40 0 0-128 64 0 0 128 48 0 0-128 64 0 0 128 40 0 0-128 64 0 0 132.3c.6 .3 1.2 .7 1.8 1.1l48 32c11.7 7.8 17 22.4 12.9 35.9S494.1 512 480 512L32 512c-14.1 0-26.5-9.2-30.6-22.7s1.1-28.1 12.9-35.9l48-32c.6-.4 1.2-.7 1.8-1.1L64 288z" />
      </Svg>
    </TouchableOpacity>
  );
};

const InsuranceIcon = ({ onPress }: IconStyleInterface) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Svg viewBox="0 0 512 512" width={35} height={35} fill={"#187571ff"}>
        <Path d="M466.5 83.7l-192-80a48.2 48.2 0 0 0 -36.9 0l-192 80C27.7 91.1 16 108.6 16 128c0 198.5 114.5 335.7 221.5 380.3 11.8 4.9 25.1 4.9 36.9 0C360.1 472.6 496 349.3 496 128c0-19.4-11.7-36.9-29.5-44.3zM256.1 446.3l-.1-381 175.9 73.3c-3.3 151.4-82.1 261.1-175.8 307.7z" />
      </Svg>
    </TouchableOpacity>
  );
};

const PensionIcon = ({ onPress }: IconStyleInterface) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Svg viewBox="0 0 512 512" width={35} height={35} fill={"#187571ff"}>
        <Path d="M184 48l144 0c4.4 0 8 3.6 8 8l0 40L176 96l0-40c0-4.4 3.6-8 8-8zm-56 8l0 40L64 96C28.7 96 0 124.7 0 160L0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-256c0-35.3-28.7-64-64-64l-64 0 0-40c0-30.9-25.1-56-56-56L184 0c-30.9 0-56 25.1-56 56zm96 152c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 48 48 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-48 0 0 48c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-48-48 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16l48 0 0-48z" />
      </Svg>
    </TouchableOpacity>
  );
};

const RemittanceIcon = ({ onPress }: IconStyleInterface) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Svg viewBox="0 0 640 512" width={35} height={35} fill={"#187571ff"}>
        <Path d="M535 41c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l64 64c4.5 4.5 7 10.6 7 17s-2.5 12.5-7 17l-64 64c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l23-23L384 112c-13.3 0-24-10.7-24-24s10.7-24 24-24l174.1 0L535 41zM105 377l-23 23L256 400c13.3 0 24 10.7 24 24s-10.7 24-24 24L81.9 448l23 23c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L7 441c-4.5-4.5-7-10.6-7-17s2.5-12.5 7-17l64-64c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9zM96 64l241.9 0c-3.7 7.2-5.9 15.3-5.9 24c0 28.7 23.3 52 52 52l117.4 0c-4 17 .6 35.5 13.8 48.8c20.3 20.3 53.2 20.3 73.5 0L608 169.5 608 384c0 35.3-28.7 64-64 64l-241.9 0c3.7-7.2 5.9-15.3 5.9-24c0-28.7-23.3-52-52-52l-117.4 0c4-17-.6-35.5-13.8-48.8c-20.3-20.3-53.2-20.3-73.5 0L32 342.5 32 128c0-35.3 28.7-64 64-64zm64 64l-64 0 0 64c35.3 0 64-28.7 64-64zM544 320c-35.3 0-64 28.7-64 64l64 0 0-64zM320 352a96 96 0 1 0 0-192 96 96 0 1 0 0 192z" />
      </Svg>
    </TouchableOpacity>
  );
};

const StocksIcon = ({ onPress }: IconStyleInterface) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Svg viewBox="0 0 512 512" width={35} height={35} fill={"#187571ff"}>
        <Path d="M64 64c0-17.7-14.3-32-32-32S0 46.3 0 64L0 400c0 44.2 35.8 80 80 80l400 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 416c-8.8 0-16-7.2-16-16L64 64zm406.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L320 210.7l-57.4-57.4c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L240 221.3l57.4 57.4c12.5 12.5 32.8 12.5 45.3 0l128-128z" />
      </Svg>
    </TouchableOpacity>
  );
};

const ElypsisIcon = ({ onPress }: IconStyleInterface) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Svg viewBox="0 0 448 512" width={35} height={35} fill={"#187571ff"}>
        <Path d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z" />
      </Svg>
    </TouchableOpacity>
  );
};

const MoneyCheckIcon = ({ onPress }: IconStyleInterface) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Svg viewBox="0 0 576 512" width={35} height={35} fill={"#187571ff"}>
        <Path d="M64 64C28.7 64 0 92.7 0 128L0 384c0 35.3 28.7 64 64 64l448 0c35.3 0 64-28.7 64-64l0-256c0-35.3-28.7-64-64-64L64 64zm48 160l160 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-160 0c-8.8 0-16-7.2-16-16s7.2-16 16-16zM96 336c0-8.8 7.2-16 16-16l352 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-352 0c-8.8 0-16-7.2-16-16zM376 160l80 0c13.3 0 24 10.7 24 24l0 48c0 13.3-10.7 24-24 24l-80 0c-13.3 0-24-10.7-24-24l0-48c0-13.3 10.7-24 24-24z" />
      </Svg>
    </TouchableOpacity>
  );
};

const CreditCardIcon = ({ onPress }: IconStyleInterface) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Svg viewBox="0 0 576 512" width={30} height={30} fill={"#187571ff"}>
        <Path d="M64 32C28.7 32 0 60.7 0 96l0 32 576 0 0-32c0-35.3-28.7-64-64-64L64 32zM576 224L0 224 0 416c0 35.3 28.7 64 64 64l448 0c35.3 0 64-28.7 64-64l0-192zM112 352l64 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-64 0c-8.8 0-16-7.2-16-16s7.2-16 16-16zm112 16c0-8.8 7.2-16 16-16l128 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-128 0c-8.8 0-16-7.2-16-16z" />
      </Svg>
    </TouchableOpacity>
  );
};

const FilterActiveIcon = ({ onPress }: IconStyleInterface) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Svg viewBox="0 0 24 24" width={30} height={30} fill="black">
        <Path d="M10 18h4v-2h-4v2zm-7-8v2h18v-2h-18zm4-6v2h10v-2h-10z" />
      </Svg>
    </TouchableOpacity>
  );
};

const BabyCarriageIcon = ({ onPress }: IconStyleInterface) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Svg viewBox="0 0 512 512" width={30} height={30} fill={"#187571ff"}>
        <Path d="M256 192L.1 192C2.7 117.9 41.3 52.9 99 14.1c13.3-8.9 30.8-4.3 39.9 8.8L256 192zm128-32c0-35.3 28.7-64 64-64l32 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-32 0 0 64c0 25.2-5.8 50.2-17 73.5s-27.8 44.5-48.6 62.3s-45.5 32-72.7 41.6S253.4 416 224 416s-58.5-5-85.7-14.6s-51.9-23.8-72.7-41.6s-37.3-39-48.6-62.3S0 249.2 0 224l224 0 160 0 0-64zM80 416a48 48 0 1 1 0 96 48 48 0 1 1 0-96zm240 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0z" />
      </Svg>
    </TouchableOpacity>
  );
};

const CableIcon = ({ onPress }: IconStyleInterface) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Svg viewBox="0 0 640 512" width={30} height={30} fill={"#187571ff"}>
        <Path d="M256 64l128 0 0 64-128 0 0-64zM240 0c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48l48 0 0 32L32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l96 0 0 32-48 0c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48l160 0c26.5 0 48-21.5 48-48l0-96c0-26.5-21.5-48-48-48l-48 0 0-32 256 0 0 32-48 0c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48l160 0c26.5 0 48-21.5 48-48l0-96c0-26.5-21.5-48-48-48l-48 0 0-32 96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-256 0 0-32 48 0c26.5 0 48-21.5 48-48l0-96c0-26.5-21.5-48-48-48L240 0zM96 448l0-64 128 0 0 64L96 448zm320-64l128 0 0 64-128 0 0-64z" />
      </Svg>
    </TouchableOpacity>
  );
};

const CarIcon = ({ onPress }: IconStyleInterface) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Svg viewBox="0 0 640 512" width={30} height={30} fill={"#187571ff"}>
        <Path d="M171.3 96L224 96l0 96-112.7 0 30.4-75.9C146.5 104 158.2 96 171.3 96zM272 192l0-96 81.2 0c9.7 0 18.9 4.4 25 12l67.2 84L272 192zm256.2 1L428.2 68c-18.2-22.8-45.8-36-75-36L171.3 32c-39.3 0-74.6 23.9-89.1 60.3L40.6 196.4C16.8 205.8 0 228.9 0 256L0 368c0 17.7 14.3 32 32 32l33.3 0c7.6 45.4 47.1 80 94.7 80s87.1-34.6 94.7-80l130.7 0c7.6 45.4 47.1 80 94.7 80s87.1-34.6 94.7-80l33.3 0c17.7 0 32-14.3 32-32l0-48c0-65.2-48.8-119-111.8-127zM434.7 368a48 48 0 1 1 90.5 32 48 48 0 1 1 -90.5-32zM160 336a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
      </Svg>
    </TouchableOpacity>
  );
};

const DeliveryIcon = ({ onPress }: IconStyleInterface) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Svg viewBox="0 0 640 512" width={30} height={30} fill={"#187571ff"}>
        <Path d="M48 0C21.5 0 0 21.5 0 48L0 368c0 26.5 21.5 48 48 48l16 0c0 53 43 96 96 96s96-43 96-96l128 0c0 53 43 96 96 96s96-43 96-96l32 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l0-64 0-32 0-18.7c0-17-6.7-33.3-18.7-45.3L512 114.7c-12-12-28.3-18.7-45.3-18.7L416 96l0-48c0-26.5-21.5-48-48-48L48 0zM416 160l50.7 0L544 237.3l0 18.7-128 0 0-96zM112 416a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm368-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
      </Svg>
    </TouchableOpacity>
  );
};

const EducationIcon = ({ onPress }: IconStyleInterface) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Svg viewBox="0 0 448 512" width={30} height={30} fill={"#187571ff"}>
        <Path d="M96 0C43 0 0 43 0 96L0 416c0 53 43 96 96 96l288 0 32 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l0-64c17.7 0 32-14.3 32-32l0-320c0-17.7-14.3-32-32-32L384 0 96 0zm0 384l256 0 0 64L96 448c-17.7 0-32-14.3-32-32s14.3-32 32-32zm32-240c0-8.8 7.2-16 16-16l192 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-192 0c-8.8 0-16-7.2-16-16zm16 48l192 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-192 0c-8.8 0-16-7.2-16-16s7.2-16 16-16z" />
      </Svg>
    </TouchableOpacity>
  );
};

const UtilityIcon = ({ onPress }: IconStyleInterface) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Svg viewBox="0 0 512 512" width={30} height={30} fill={"#187571ff"}>
        <Path d="M78.6 5C69.1-2.4 55.6-1.5 47 7L7 47c-8.5 8.5-9.4 22-2.1 31.6l80 104c4.5 5.9 11.6 9.4 19 9.4l54.1 0 109 109c-14.7 29-10 65.4 14.3 89.6l112 112c12.5 12.5 32.8 12.5 45.3 0l64-64c12.5-12.5 12.5-32.8 0-45.3l-112-112c-24.2-24.2-60.6-29-89.6-14.3l-109-109 0-54.1c0-7.5-3.5-14.5-9.4-19L78.6 5zM19.9 396.1C7.2 408.8 0 426.1 0 444.1C0 481.6 30.4 512 67.9 512c18 0 35.3-7.2 48-19.9L233.7 374.3c-7.8-20.9-9-43.6-3.6-65.1l-61.7-61.7L19.9 396.1zM512 144c0-10.5-1.1-20.7-3.2-30.5c-2.4-11.2-16.1-14.1-24.2-6l-63.9 63.9c-3 3-7.1 4.7-11.3 4.7L352 176c-8.8 0-16-7.2-16-16l0-57.4c0-4.2 1.7-8.3 4.7-11.3l63.9-63.9c8.1-8.1 5.2-21.8-6-24.2C388.7 1.1 378.5 0 368 0C288.5 0 224 64.5 224 144l0 .8 85.3 85.3c36-9.1 75.8 .5 104 28.7L429 274.5c49-23 83-72.8 83-130.5zM56 432a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z" />
      </Svg>
    </TouchableOpacity>
  );
};

const FoodIcon = ({ onPress }: IconStyleInterface) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Svg viewBox="0 0 448 512" width={30} height={30} fill={"#187571ff"}>
        <Path d="M416 0C400 0 288 32 288 176l0 112c0 35.3 28.7 64 64 64l32 0 0 128c0 17.7 14.3 32 32 32s32-14.3 32-32l0-128 0-112 0-208c0-17.7-14.3-32-32-32zM64 16C64 7.8 57.9 1 49.7 .1S34.2 4.6 32.4 12.5L2.1 148.8C.7 155.1 0 161.5 0 167.9c0 45.9 35.1 83.6 80 87.7L80 480c0 17.7 14.3 32 32 32s32-14.3 32-32l0-224.4c44.9-4.1 80-41.8 80-87.7c0-6.4-.7-12.8-2.1-19.1L191.6 12.5c-1.8-8-9.3-13.3-17.4-12.4S160 7.8 160 16l0 134.2c0 5.4-4.4 9.8-9.8 9.8c-5.1 0-9.3-3.9-9.8-9L127.9 14.6C127.2 6.3 120.3 0 112 0s-15.2 6.3-15.9 14.6L83.7 151c-.5 5.1-4.7 9-9.8 9c-5.4 0-9.8-4.4-9.8-9.8L64 16zm48.3 152l-.3 0-.3 0 .3-.7 .3 .7z" />
      </Svg>
    </TouchableOpacity>
  );
};

const GamesIcon = ({ onPress }: IconStyleInterface) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Svg viewBox="0 0 640 512" width={30} height={30} fill={"#187571ff"}>
        <Path d="M192 64C86 64 0 150 0 256S86 448 192 448l256 0c106 0 192-86 192-192s-86-192-192-192L192 64zM496 168a40 40 0 1 1 0 80 40 40 0 1 1 0-80zM392 304a40 40 0 1 1 80 0 40 40 0 1 1 -80 0zM168 200c0-13.3 10.7-24 24-24s24 10.7 24 24l0 32 32 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-32 0 0 32c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-32-32 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l32 0 0-32z" />
      </Svg>
    </TouchableOpacity>
  );
};

const GasIcon = ({ onPress }: IconStyleInterface) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Svg viewBox="0 0 512 512" width={30} height={30} fill={"#187571ff"}>
        <Path d="M32 64C32 28.7 60.7 0 96 0L256 0c35.3 0 64 28.7 64 64l0 192 8 0c48.6 0 88 39.4 88 88l0 32c0 13.3 10.7 24 24 24s24-10.7 24-24l0-154c-27.6-7.1-48-32.2-48-62l0-64L384 64c-8.8-8.8-8.8-23.2 0-32s23.2-8.8 32 0l77.3 77.3c12 12 18.7 28.3 18.7 45.3l0 13.5 0 24 0 32 0 152c0 39.8-32.2 72-72 72s-72-32.2-72-72l0-32c0-22.1-17.9-40-40-40l-8 0 0 144c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 512c-17.7 0-32-14.3-32-32s14.3-32 32-32L32 64zM96 80l0 96c0 8.8 7.2 16 16 16l128 0c8.8 0 16-7.2 16-16l0-96c0-8.8-7.2-16-16-16L112 64c-8.8 0-16 7.2-16 16z" />
      </Svg>
    </TouchableOpacity>
  );
};

const FilterNotActiveIcon = ({ onPress }: IconStyleInterface) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Svg
        viewBox="0 0 24 24"
        width={30}
        height={30}
        fill="none"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <Path d="M3 6h18M6 12h12M10 18h4" />
      </Svg>
    </TouchableOpacity>
  );
};

export {
  MenuIcon,
  CableIcon,
  CarIcon,
  GasIcon,
  DeliveryIcon,
  UtilityIcon,
  FoodIcon,
  GamesIcon,
  BabyCarriageIcon,
  EducationIcon,
  CloseIcon,
  SavingIcon,
  StocksIcon,
  PensionIcon,
  ElypsisIcon,
  SackMoneyIcon,
  InsuranceIcon,
  GovernmentIcon,
  RemittanceIcon,
  MoneyCheckIcon,
  CreditCardIcon,
  NotificationIcon,
  FilterActiveIcon,
  FilterNotActiveIcon,
};
