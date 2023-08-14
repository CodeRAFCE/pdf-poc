import PropTypes from "prop-types";
import {Icon} from "@iconify/react";

const Iconify = ({icon}) => {
	return <Icon icon={icon} />;
};

Iconify.propTypes = {
	icon: PropTypes.string.isRequired,
};

export default Iconify;
