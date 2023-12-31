import PropTypes from "prop-types";
import {PDFDownloadLink, PDFViewer} from "@react-pdf/renderer";
import {
	Box,
	Stack,
	Button,
	Dialog,
	Tooltip,
	IconButton,
	DialogActions,
	CircularProgress,
} from "@mui/material";

// hooks
import useToggle from "../../hooks/useToggle";

import InvoicePDF from "./InvoicePDF";
import Iconify from "../../components/Iconify";

InvoiceToolbar.propTypes = {
	invoice: PropTypes.object.isRequired,
};

export default function InvoiceToolbar({invoice}) {
	const {toggle: open, onOpen, onClose} = useToggle();

	return (
		<>
			<Stack
				spacing={2}
				direction={{xs: "column", sm: "row"}}
				justifyContent="space-between"
				alignItems={{sm: "center"}}
				sx={{mb: 5}}
			>
				<Stack direction="row" spacing={1}>
					<Tooltip title="View">
						<IconButton onClick={onOpen}>
							<Iconify icon={"eva:eye-fill"} />
						</IconButton>
					</Tooltip>

					<PDFDownloadLink
						document={<InvoicePDF invoice={invoice} />}
						fileName={invoice.invoiceNumber}
						style={{textDecoration: "none"}}
					>
						{({loading}) => (
							<Tooltip title="Download">
								<IconButton>
									{loading ? (
										<CircularProgress size={24} color="inherit" />
									) : (
										<Iconify icon={"eva:download-fill"} />
									)}
								</IconButton>
							</Tooltip>
						)}
					</PDFDownloadLink>

					<Tooltip title="Print">
						<IconButton>
							<Iconify icon={"eva:printer-fill"} />
						</IconButton>
					</Tooltip>

					<Tooltip title="Send">
						<IconButton>
							<Iconify icon={"ic:round-send"} />
						</IconButton>
					</Tooltip>

					<Tooltip title="Share">
						<IconButton>
							<Iconify icon={"eva:share-fill"} />
						</IconButton>
					</Tooltip>
				</Stack>

				<Button
					color="inherit"
					variant="outlined"
					startIcon={<Iconify icon={"eva:checkmark-fill"} />}
					sx={{alignSelf: "flex-end"}}
				>
					Mark as Paid
				</Button>
			</Stack>

			<Dialog fullScreen open={open}>
				<Box sx={{height: "100%", display: "flex", flexDirection: "column"}}>
					<DialogActions
						sx={{
							zIndex: 9,
							padding: "12px !important",
							// boxShadow: (theme) => theme.customShadows.z8,
							boxShadow: "rgba(0, 0, 0, 0.08) 0px 4px 12px",
						}}
					>
						<Tooltip title="Close">
							<IconButton color="inherit" onClick={onClose}>
								<Iconify icon={"eva:close-fill"} />
							</IconButton>
						</Tooltip>
					</DialogActions>
					<Box sx={{flexGrow: 1, height: "100%", overflow: "hidden"}}>
						<PDFViewer width="100%" height="100%" style={{border: "none"}}>
							<InvoicePDF invoice={invoice} />
						</PDFViewer>
					</Box>
				</Box>
			</Dialog>
		</>
	);
}
