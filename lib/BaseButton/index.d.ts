/// <reference types="react" />
import './index.less';
interface Props {
    /**
     * 按钮类型 默认primary
     */
    type?: 'primary' | 'ghost' | 'dashed' | 'link' | 'text' | 'default';
    /**
     * 点击事件  有交互的时候用这个
     */
    onClick?: Function;
}
/**
 * Button 组件
 * @link [antd button](https://ant.design/components/button-cn/)
 */
declare function BaseButton(props: Props): JSX.Element;
declare namespace BaseButton {
    var defaultProps: {
        type: string;
    };
}
export default BaseButton;
