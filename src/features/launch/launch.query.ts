import { gql, TypedDocumentNode } from '@apollo/client';

const query: TypedDocumentNode<{
  launches: Array<{
    id: string;
    mission_name: string;
    details: string;
  }>
}> = gql`

    query SpaceXLaunches {
        launches {
            id
            mission_name
            details
        }
    }
`;

export default query;