import * as React from 'react';
import {
    ThemeVariant,
    useTheme,
    EmailField,
    IntegerField,
    DecimalField,
    CreditCardNumberField,
    CreditCardExpirationField,
    CvvField,
    TextField,
    SearchField,
    PasswordField,
    DateField,
    PhoneNumberField,
    Box,
    DateTimeField,
    Text8,
} from '..';
import {inspect} from 'util';
import Icon from '../icons/icon-visibility';
import {StorySection, countriesList, phoneNumbersList} from './helpers';

export default {
    title: 'Components|Forms/Fields',
};

type UncontrolledProps = {
    title: string;
    children: (
        onChange: (e: React.ChangeEvent<any>) => void,
        onChangeValue: (v: any) => void
    ) => React.ReactNode;
};

const Uncontrolled: React.FC<UncontrolledProps> = ({title, children}) => {
    const [rawValue, setRawValue] = React.useState<any>(undefined);
    const [value, setValue] = React.useState<any>(undefined);

    const onChange = (e: React.ChangeEvent<any>) => setRawValue(e.target.value);
    const onChangeValue = (v: any) => setValue(v);

    return (
        <StorySection title={title}>
            {children(onChange, onChangeValue)}
            <div style={{fontSize: 10, marginTop: 16}}>
                onChange: {typeof rawValue === 'undefined' ? '' : `(${typeof rawValue}) ${inspect(rawValue)}`}
            </div>
            <div style={{fontSize: 10, marginTop: 8}}>
                onChangeValue: {typeof value === 'undefined' ? '' : `(${typeof value}) ${inspect(value)}`}
            </div>
        </StorySection>
    );
};

type ControlledProps = {
    title: string;
    initialValue: string;
    children: (
        onChange: (e: React.ChangeEvent<any>) => void,
        onChangeValue: (v: any) => void,
        value: string
    ) => React.ReactNode;
};

const Controlled: React.FC<ControlledProps> = ({title, initialValue, children}) => {
    const [rawValue, setRawValue] = React.useState(initialValue);
    const [value, setValue] = React.useState(undefined);

    const onChange = (e: React.ChangeEvent<any>) => setRawValue(e.target.value);
    const onChangeValue = (v: any) => setValue(v);

    return (
        <StorySection title={title}>
            {children(onChange, onChangeValue, rawValue)}
            <div style={{fontSize: 10, marginTop: 16}}>
                onChange: {typeof rawValue === 'undefined' ? '' : `(${typeof rawValue}) ${inspect(rawValue)}`}
            </div>
            <div style={{fontSize: 10, marginTop: 8}}>
                onChangeValue: {typeof value === 'undefined' ? '' : `(${typeof value}) ${inspect(value)}`}
            </div>
        </StorySection>
    );
};

const DatePickerWarning: React.FC = () => (
    <Box paddingBottom={8}>
        <Text8 regular>
            ⚠️ Uses browser's native date picker when available. Otherwise renders a React datepicker (eg.
            Safari Desktop)
        </Text8>
    </Box>
);

const getCountrySuggestions = (value: string) =>
    countriesList
        .filter((s) => String(s).toLocaleLowerCase().startsWith(value.toLocaleLowerCase()))
        .slice(0, 5);

const getPhoneNumberSuggestions = (value: string) =>
    phoneNumbersList
        .filter((s) => String(s).toLocaleLowerCase().startsWith(value.toLocaleLowerCase()))
        .slice(0, 5);

export const Variants: StoryComponent = () => {
    const {colors} = useTheme();
    return (
        <>
            <StorySection title="Default">
                <div data-testid="normal-field">
                    <TextField optional name="text" label="Normal field" />
                </div>
            </StorySection>

            <StorySection title="Multiline">
                <TextField optional name="text" label="Multiline" multiline />
            </StorySection>

            <StorySection title="Multiline with maxLength">
                <div data-testid="multiline-max-length">
                    <TextField
                        name="text"
                        label="Multiline with maxLength"
                        multiline
                        maxLength={200}
                        helperText="Helper Text"
                    />
                </div>
            </StorySection>

            <StorySection title="With label">
                <TextField name="text" label="Label" />
            </StorySection>

            <StorySection title="With label and placeholder">
                <TextField name="text" label="Label" placeholder="Placeholder" />
            </StorySection>

            <StorySection title="With label and default value">
                <TextField name="text" label="Label" defaultValue="Default value" />
            </StorySection>

            <StorySection title="With helper text">
                <TextField name="text" label="Label" defaultValue="Default value" helperText="Helper Text" />
            </StorySection>

            <StorySection title="With Error">
                <TextField
                    name="text"
                    error
                    label="Label"
                    defaultValue="Default value"
                    helperText="I'm a descriptive error"
                />
            </StorySection>

            <StorySection title="With prefix">
                <TextField name="text" label="Label" defaultValue="Default value" prefix="$" />
            </StorySection>

            <StorySection title="With icon at the end">
                <TextField name="text" label="Label" defaultValue="Default value" endIcon={<Icon />} />
            </StorySection>

            <StorySection title="Disabled">
                <TextField name="text" disabled label="Disabled" defaultValue="Default value" />
            </StorySection>

            <div style={{backgroundColor: colors.textLink}}>
                <ThemeVariant isInverse>
                    <Box padding={16}>
                        <StorySection title="Inverse with helper text">
                            <TextField
                                name="text"
                                label="Label"
                                defaultValue="Default value"
                                helperText="Helper Text"
                            />
                        </StorySection>

                        <StorySection title="Inverse with Error">
                            <TextField
                                name="text"
                                error
                                label="Label"
                                defaultValue="Default value"
                                helperText="I'm a descriptive error"
                            />
                        </StorySection>
                    </Box>
                </ThemeVariant>
            </div>
        </>
    );
};

export const TypesUncontrolled: StoryComponent = () => (
    <>
        <Uncontrolled title="TextField">
            {(handleChange, handleChangeValue) => (
                <TextField
                    name="text"
                    label="Text"
                    defaultValue="Some text"
                    onChange={handleChange}
                    onChangeValue={handleChangeValue}
                />
            )}
        </Uncontrolled>

        <Uncontrolled title="EmailField">
            {(handleChange, handleChangeValue) => (
                <EmailField
                    name="email"
                    label="Email"
                    defaultValue="aitor.menta@gmail.com"
                    onChange={handleChange}
                    onChangeValue={handleChangeValue}
                />
            )}
        </Uncontrolled>

        <Uncontrolled title="IntegerField">
            {(handleChange, handleChangeValue) => (
                <IntegerField
                    name="integer"
                    label="Integer"
                    defaultValue="123"
                    onChange={handleChange}
                    onChangeValue={handleChangeValue}
                />
            )}
        </Uncontrolled>

        <Uncontrolled title="DecimalField">
            {(handleChange, handleChangeValue) => (
                <DecimalField
                    name="decimal"
                    label="Decimal"
                    defaultValue="123.45"
                    onChange={handleChange}
                    onChangeValue={handleChangeValue}
                />
            )}
        </Uncontrolled>

        <Uncontrolled title="CreditCardNumberField">
            {(handleChange, handleChangeValue) => (
                <CreditCardNumberField
                    name="credit-card-number"
                    label="Credit card"
                    defaultValue="1234567890123456"
                    onChange={handleChange}
                    onChangeValue={handleChangeValue}
                />
            )}
        </Uncontrolled>

        <Uncontrolled title="CreditCardExpirationField">
            {(handleChange, handleChangeValue) => (
                <CreditCardExpirationField
                    name="credit-card-expiration"
                    label="Expiration"
                    defaultValue="14/24"
                    onChange={handleChange}
                    onChangeValue={handleChangeValue}
                />
            )}
        </Uncontrolled>

        <Uncontrolled title="CvvField">
            {(handleChange, handleChangeValue) => (
                <CvvField
                    name="cvv"
                    label="CVV"
                    defaultValue="1234"
                    onChange={handleChange}
                    onChangeValue={handleChangeValue}
                />
            )}
        </Uncontrolled>

        <Uncontrolled title="PasswordField">
            {(handleChange, handleChangeValue) => (
                <form>
                    <PasswordField
                        name="password"
                        label="Password"
                        defaultValue="password123"
                        onChange={handleChange}
                        onChangeValue={handleChangeValue}
                    />
                </form>
            )}
        </Uncontrolled>

        <Uncontrolled title="DateField">
            {(handleChange, handleChangeValue) => (
                <>
                    <DatePickerWarning />
                    <div data-testid="date">
                        <DateField
                            name="date"
                            label="Date"
                            onChange={handleChange}
                            onChangeValue={handleChangeValue}
                        />
                    </div>
                </>
            )}
        </Uncontrolled>

        <Uncontrolled title="DateTimeField">
            {(handleChange, handleChangeValue) => (
                <>
                    <DatePickerWarning />
                    <div data-testid="datetime">
                        <DateTimeField
                            name="datetime"
                            label="DateTime"
                            onChange={handleChange}
                            onChangeValue={handleChangeValue}
                        />
                    </div>
                </>
            )}
        </Uncontrolled>

        <Uncontrolled title="PhoneNumberField">
            {(handleChange, handleChangeValue) => (
                <PhoneNumberField
                    name="phone"
                    label="Phone"
                    defaultValue="654834455"
                    onChange={handleChange}
                    onChangeValue={handleChangeValue}
                />
            )}
        </Uncontrolled>

        <Uncontrolled title="PhoneNumberField (with prefix)">
            {(handleChange, handleChangeValue) => (
                <PhoneNumberField
                    name="phone"
                    label="Phone with prefix"
                    prefix="+34"
                    defaultValue="654834455"
                    onChange={handleChange}
                    onChangeValue={handleChangeValue}
                />
            )}
        </Uncontrolled>

        <Uncontrolled title="SearchField">
            {(handleChange, handleChangeValue) => (
                <SearchField
                    name="search"
                    label="Search"
                    onChange={handleChange}
                    onChangeValue={handleChangeValue}
                />
            )}
        </Uncontrolled>
    </>
);

TypesUncontrolled.story = {name: 'Types (uncontrolled)'};

export const TypesControlled = (): React.ReactNode => (
    <>
        <Controlled title="TextField" initialValue="Some text">
            {(handleChange, handleChangeValue, value) => (
                <TextField
                    value={value}
                    name="text"
                    label="Text"
                    onChange={handleChange}
                    onChangeValue={handleChangeValue}
                />
            )}
        </Controlled>

        <Controlled title="TextField with suggestions" initialValue="">
            {(handleChange, handleChangeValue, value) => (
                <TextField
                    autoComplete="off"
                    value={value}
                    name="country"
                    label="Text with suggestions"
                    placeholder="Country name (start with 'A')"
                    onChange={handleChange}
                    onChangeValue={handleChangeValue}
                    getSuggestions={getCountrySuggestions}
                />
            )}
        </Controlled>

        <Controlled title="EmailField" initialValue="aitor.menta@gmail.com">
            {(handleChange, handleChangeValue, value) => (
                <EmailField
                    value={value}
                    name="email"
                    label="Email"
                    onChange={handleChange}
                    onChangeValue={handleChangeValue}
                />
            )}
        </Controlled>

        <Controlled title="IntegerField" initialValue="123">
            {(handleChange, handleChangeValue, value) => (
                <IntegerField
                    value={value}
                    name="integer"
                    label="Integer"
                    onChange={handleChange}
                    onChangeValue={handleChangeValue}
                />
            )}
        </Controlled>

        <Controlled title="DecimalField" initialValue="123.456">
            {(handleChange, handleChangeValue, value) => (
                <DecimalField
                    value={value}
                    name="decimal"
                    label="Decimal"
                    onChange={handleChange}
                    onChangeValue={handleChangeValue}
                />
            )}
        </Controlled>

        <Controlled title="CreditCardNumberField" initialValue="1234567812345678">
            {(handleChange, handleChangeValue, value) => (
                <CreditCardNumberField
                    value={value}
                    name="credit-card-number"
                    label="Credit card"
                    onChange={handleChange}
                    onChangeValue={handleChangeValue}
                />
            )}
        </Controlled>

        <Controlled title="CreditCardExpirationField" initialValue="13/21">
            {(handleChange, handleChangeValue, value) => (
                <CreditCardExpirationField
                    value={value}
                    name="credit-card-expiration"
                    label="Expiration"
                    onChange={handleChange}
                    onChangeValue={handleChangeValue}
                />
            )}
        </Controlled>

        <Controlled title="CvvField" initialValue="1234">
            {(handleChange, handleChangeValue, value) => (
                <CvvField
                    value={value}
                    name="cvv"
                    label="CVV"
                    onChange={handleChange}
                    onChangeValue={handleChangeValue}
                />
            )}
        </Controlled>

        <Controlled title="PasswordField" initialValue="password123">
            {(handleChange, handleChangeValue, value) => (
                <form>
                    <PasswordField
                        name="password"
                        value={value}
                        label="Password"
                        onChange={handleChange}
                        onChangeValue={handleChangeValue}
                    />
                </form>
            )}
        </Controlled>

        <Controlled title="DateField" initialValue="1980-10-06">
            {(handleChange, handleChangeValue, value) => (
                <>
                    <DatePickerWarning />
                    <DateField
                        value={value}
                        name="date"
                        label="Date"
                        onChange={handleChange}
                        onChangeValue={handleChangeValue}
                    />
                </>
            )}
        </Controlled>

        <Controlled title="DateTimeField" initialValue="1980-10-06T13:14">
            {(handleChange, handleChangeValue, value) => (
                <>
                    <DatePickerWarning />
                    <DateTimeField
                        value={value}
                        name="datetime"
                        label="DateTime"
                        onChange={handleChange}
                        onChangeValue={handleChangeValue}
                    />
                </>
            )}
        </Controlled>

        <Controlled title="PhoneNumberField" initialValue="654834455">
            {(handleChange, handleChangeValue, value) => (
                <PhoneNumberField
                    value={value}
                    name="phone"
                    label="Phone"
                    onChange={handleChange}
                    onChangeValue={handleChangeValue}
                />
            )}
        </Controlled>

        <Controlled title="PhoneNumberField (with suggestions)" initialValue="">
            {(handleChange, handleChangeValue, value) => (
                <PhoneNumberField
                    value={value}
                    name="phone"
                    label="Phone with suggestions"
                    placeholder="Enter phone (start with 6)"
                    onChange={handleChange}
                    onChangeValue={handleChangeValue}
                    getSuggestions={getPhoneNumberSuggestions}
                />
            )}
        </Controlled>

        <Controlled title="PhoneNumberField (with prefix)" initialValue="654834455">
            {(handleChange, handleChangeValue, value) => (
                <PhoneNumberField
                    value={value}
                    name="phone"
                    label="Phone with prefix"
                    prefix="+34"
                    onChange={handleChange}
                    onChangeValue={handleChangeValue}
                />
            )}
        </Controlled>

        <Controlled title="SearchField" initialValue="">
            {(handleChange, handleChangeValue, value) => (
                <div data-testid="search">
                    <SearchField
                        name="search"
                        label="Search"
                        onChange={handleChange}
                        onChangeValue={handleChangeValue}
                        value={value}
                    />
                </div>
            )}
        </Controlled>

        <Controlled title="SearchField with suggestions" initialValue="">
            {(handleChange, handleChangeValue, value) => (
                <SearchField
                    autoComplete="off"
                    name="searchCountry"
                    label="Search country"
                    placeholder="Country name (start with 'A')"
                    value={value}
                    onChange={handleChange}
                    onChangeValue={handleChangeValue}
                    getSuggestions={getCountrySuggestions}
                />
            )}
        </Controlled>
    </>
);

TypesControlled.story = {name: 'Types (controlled)'};