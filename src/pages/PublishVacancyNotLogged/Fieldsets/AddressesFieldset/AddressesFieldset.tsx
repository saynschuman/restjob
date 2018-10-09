import * as React from "react"
import { PublishVacancyFieldset, PublishVacancyFieldsetProps } from "../PublishVacancyFieldset"
import { FieldInputCheckbox } from "../../../../components/common/forms/InputCheckbox/InputCheckbox"
import { NewAddressForm } from "../../AddAddressForm/NewAddressForm"
import { Address } from "../../../../types"
const CSS = require("./AddressesFieldset.styl")

interface AddressesFieldsetProps extends PublishVacancyFieldsetProps {
    addresses: Address[]
    onAddressAdd(address: Address): any
}

interface AddressesFieldsetState {
    newAddressFormVisible: boolean
}

export class AddressesFieldset extends React.PureComponent<AddressesFieldsetProps, AddressesFieldsetState> {

    state = {
        newAddressFormVisible: false,
    }

    showAddAddressForm = () => {
        this.setState({ newAddressFormVisible: true })
    }

    hideAddAddressForm = () => {
        this.setState({ newAddressFormVisible: false })
    }

    render() {
        return (
            <PublishVacancyFieldset {...this.props} titleText={__t("publishVacancyPage.listItem2")}>
                <div className={CSS.addressesList}>
                    {this.props.addresses.map((address, index) => (
                        <FieldInputCheckbox
                            key={index}
                            title={address.address}
                            value={address}
                            name={`addresses`}
                            className={CSS.addressCheckbox}
                        />
                    ))}
                </div>
                {!this.state.newAddressFormVisible &&
                <div
                    className={CSS.addAddressButton}
                    onClick={this.showAddAddressForm}
                >
                    {__t("publishVacancyPage.addAddress")}
                </div>
                }
                {this.state.newAddressFormVisible &&
                <NewAddressForm
                    onAdd={(address: Address) => {
                        this.hideAddAddressForm()
                        this.props.onAddressAdd(address)
                    }}
                    onCancel={this.hideAddAddressForm}
                />
                }
            </PublishVacancyFieldset>
        )
    }
}
