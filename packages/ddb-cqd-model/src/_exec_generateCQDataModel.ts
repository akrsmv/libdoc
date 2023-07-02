import { set_correlation_token } from "@incta/common-utils";
import { generateCQDataModel } from "./generateCQDataModel";

set_correlation_token("[COMMAND-QUERY-MODELGEN]")
generateCQDataModel();