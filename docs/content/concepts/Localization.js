import {Md} from '../../components/Md';
import {CodeSplit} from '../../components/CodeSplit';
import {CodeSnippet} from '../../components/CodeSnippet';
import {ConfigTable} from '../../components/ConfigTable';
import {HtmlElement} from 'cx/ui/HtmlElement';
import {Button} from 'cx/ui/Button';
import {NumberField} from 'cx/ui/form/NumberField';
import {DateField} from 'cx/ui/form/DateField';
import {Calendar} from 'cx/ui/form/Calendar';
import {Culture} from 'cx/ui/Culture';
import {Controller} from 'cx/ui/Controller';
import {LabelsLeftLayout} from 'cx/ui/layout/LabelsLeftLayout';

function loadCulture(culture) {
    //code-splitting - it's mandatory to use string constants so webpack can know how to prepare packages
    switch (culture) {
        case 'sr-latn-ba':
            return System.import('cx/locale/sr-latn-ba');

        default:
        case 'en-us':
            return System.import('cx/locale/en-us');
    }
}

function setCulture(culture, store) {
    loadCulture(culture)
        .then(() => {
            Culture.setCulture(culture);
            store.notify();//force re-render
        });
}

class PageController extends Controller {
    init() {
        super.init();

        this.store.init('$page.number', 123456.78);
        this.store.init('$page.date', new Date().toISOString());
    }
}

export const LocalizationPage = <cx>
    <Md>
        <CodeSplit>

            # Localization

            Cx support different culture specific number, currency and date formatting based on `Intl` helpers provided
            by modern browsers. Besides that, Cx offers translation of standard messages to any language.

            <div class="widgets" controller={PageController}>
                <div preserveWhitespace>
                    <Button onClick={(e, {store}) => {setCulture('sr-latn-ba', store)}}>sr-latn-ba</Button>
                    <Button onClick={(e, {store}) => {setCulture('en-us', store)}}>en-us</Button>
                </div>
                <div layout={LabelsLeftLayout}>
                    <NumberField value:bind="$page.number" required />
                    <DateField value:bind="$page.date" required />
                    <NumberField value:bind="$page.number" required format="currency"/>
                    <Calendar value:bind="$page.date" />
                </div>
            </div>

            <CodeSnippet putInto="code">{`
            function loadCulture(culture) {
                //code-splitting - it's mandatory to use string constants so webpack can know how to prepare packages
                switch (culture) {
                    case 'sr-latn-ba':
                        return System.import('cx/locale/sr-latn-ba');

                    default:
                    case 'en-us':
                        return System.import('cx/locale/en-us');
                }
            }

            function setCulture(culture, store) {
                loadCulture(culture)
                    .then(() => {
                        Culture.setCulture(culture);
                        store.notify();//force re-render
                    });
            }

            class PageController extends Controller {
                init() {
                    super.init();

                    this.store.init('$page.number', 123456.78);
                    this.store.init('$page.date', new Date().toISOString());
                }
            }
            ...
            <div class="widgets" controller={PageController}>
                <div preserveWhitespace>
                    <Button onClick={(e, {store}) => {setCulture('sr-latn-ba', store)}}>sr-latn-ba</Button>
                    <Button onClick={(e, {store}) => {setCulture('en-us', store)}}>en-us</Button>
                </div>
                <div layout={LabelsLeftLayout}>
                    <NumberField value:bind="$page.number" required />
                    <DateField value:bind="$page.date" required />
                    <NumberField value:bind="$page.number" required format="currency"/>
                    <Calendar value:bind="$page.date" />
                </div>
            </div>
            `}</CodeSnippet>
        </CodeSplit>

        TODO

        - Explain widget localization
    </Md>
</cx>

