import {Md} from '../../../components/Md';
import container from './HtmlElement';

export default {
    ...container,
    disabled: {
        type: 'boolean',
        key: true,
        description: <cx><Md>
            Set to `true` to disable the button.
        </Md></cx>
    },
    tag: {
        type: 'string',
        description: <cx><Md>
            HTML tag to be used. Default is `button`.
        </Md></cx>
    },
    baseClass: {
        type: 'string',
        description: <cx><Md>
            Base CSS class to be applied on the element. Default is 'button'.
        </Md></cx>
    },
    mod: {
        type: 'string/array',
        description: <cx><Md>
            Appearance modifier. Cx ships with `primary` and `danger` mods.
        </Md></cx>
    },
    confirm: {
        type: 'string/object',
        description: <cx><Md>
            Confirmation text or configuration object. See [MsgBox.yesNo](~/widgets/msg-boxes) for more details.
        </Md></cx>
    }
};
