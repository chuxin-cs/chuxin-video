import {cn} from "@/utils";
import {Content} from "antd/es/layout/layout";

function Main() {
    return (<Content className="flex chuxin-layout-main">
        <div className="flex-grow overflow-auto size-full">
            <div className={cn(
                "m-auto size-full flex-grow sm:p-2"
            )}>
            </div>
        </div>
    </Content>)
}

export default Main