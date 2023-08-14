import {Box, Container} from "@mui/material";

// _mock_
import {_invoices} from "./_mock/_invoice";

import InvoiceDetails from "./sections/invoice/InvoiceDetails";

const App = () => {
	// const handleDownload = () => {
	// 	const blob = new Blob([<Invoice key={1} />], {type: "application/pdf"});
	// 	const url = URL.createObjectURL(blob);
	// 	const a = document.createElement("a");
	// 	a.href = url;
	// 	a.download = "invoice.pdf";
	// 	a.click();
	// 	URL.revokeObjectURL(url);
	// };
	const id = "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b1";

	const invoice = _invoices.find((invoice) => invoice.id === id);

	return (
		<Container maxWidth="xl">
			<Box sx={{p: 8}}>
				<InvoiceDetails invoice={invoice} />
			</Box>
		</Container>
	);
};

export default App;
