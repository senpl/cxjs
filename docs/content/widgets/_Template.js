import {Md} from '../../components/Md';
import {CodeSplit} from '../../components/CodeSplit';
import {CodeSnippet} from '../../components/CodeSnippet';
import {ConfigTable} from '../../components/ConfigTable';

import {HtmlElement} from 'cx/ui/HtmlElement';


export const Title = <cx>
   <Md>
      # Title

      <CodeSplit>

         Some text here.

         <div class="widgets">
            Add a few widgets here.
         </div>

         <CodeSnippet putInto="code">{`
             <div class="widgets">

             </div>
         `}</CodeSnippet>
      </CodeSplit>

      ## Configuration

      <ConfigTable props={{}} />

   </Md>
</cx>

