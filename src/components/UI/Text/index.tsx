import styled, { CSSProp } from "styled-components";

interface Props {
  size?: string;
  color?: string;
  lineHeight?: number;
  bold?: string;
  children: any;
}

const Text = styled.p<any>`
  font-size: ${(props) => (props.size ? props.size : "1.6rem")};
  color: ${(props) => (props.color ? props.color : "#000")};
  line-height: ${(props) => (props.lineHeight ? props.lineHeight : 1)};
  font-weight: ${(props) => (props.bold ? props.bold : "normal")};
  text-align: justify;
`;

export default function index({
  children,
  size,
  color,
  lineHeight,
  bold,
}: Props) {
  return (
    <Text size={size} color={color} lineHeight={lineHeight} bold={bold}>
      {children}
    </Text>
  );
}
