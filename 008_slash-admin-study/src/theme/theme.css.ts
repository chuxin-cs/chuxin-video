import {hexToRgbChannel} from "@/utils/theme";
import {createThemeContract} from "@vanilla-extract/css";
import {type AddChannelToLeaf, themeTokens} from "./type.ts";

const contractInitialValue = {
    ...themeTokens,
    colors: addColorChannels(themeTokens.colors),
};

// create theme contract
export const themeVars = createThemeContract(contractInitialValue);

function addColorChannels<T extends Record<string, any>>(obj: T): AddChannelToLeaf<T> {
    const result: Record<string, any> = {};

    // check if the object is a leaf object
    const isLeafObject = Object.values(obj).every((v) => v === null || typeof v === "string");

    if (isLeafObject) {
        // add channel to the leaf object
        for (const [key, value] of Object.entries(obj)) {
            result[key] = value;
            result[`${key}Channel`] = value === null ? "" : value.startsWith("#") ? hexToRgbChannel(value) : value;
        }
    } else {
        // recursively process non-leaf objects
        for (const [key, value] of Object.entries(obj)) {
            if (typeof value === "object" && value !== null) {
                result[key] = addColorChannels(value);
            } else {
                result[key] = value;
            }
        }
    }

    return result as AddChannelToLeaf<T>;
}
