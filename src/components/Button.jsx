import React from "react";
import PropTypes from 'prop-types';
import classNames from 'classnames';
import OystersBlock from "./OystersBlock";

const Button=({ onClick, className, outline, children })=> {

    return (
        <button
            onClick={onClick}
            className={classNames('button', className, {
                'button--outline': outline,
            })}>
            {children}
        </button>
    );
}
Button.defaultProps = {
    onClick: PropTypes.func,
};

export default Button;
