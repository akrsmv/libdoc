import { set_correlation_token } from "@incta/common-utils";
import { generateDataModel } from "./generateDataModel";

set_correlation_token("[MODELGEN]")
generateDataModel();