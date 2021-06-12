import { ChangeEvent, ReactElement } from 'react';
import Spinner from '../Spinner';
import { GENRES, PLATFORMS, SORT_BY, TAGS } from './constant';
import {
  Form,
  FormContainer,
  Label,
  Select,
  Option,
} from './styles/GameFilter';

type Props = {
  isLoading: boolean;
  onFilterChange: (e: ChangeEvent<HTMLFormElement>) => void;
};

const GameFilter = ({ onFilterChange, isLoading }: Props): ReactElement => {
  return (
    <FormContainer>
      <Spinner isLoading={isLoading} />
      <Form onChange={onFilterChange}>
        <Label htmlFor="platform-select">
          Platform:
          <Select name="platform" id="platform-select">
            {PLATFORMS.map((platform) => (
              <Option key={platform.value} value={platform.value}>
                {platform.display}
              </Option>
            ))}
          </Select>
        </Label>

        <Label htmlFor="genre-select">
          Genre:
          <Select name="genre" id="genre-select">
            {GENRES.map((genre) => (
              <Option key={genre.value} value={genre.value}>
                {genre.display}
              </Option>
            ))}
          </Select>
        </Label>

        <Label htmlFor="tag-select">
          Tag:
          <Select name="tag" id="tag-select">
            {TAGS.map((tag) => (
              <Option key={tag.value} value={tag.value}>
                {tag.display}
              </Option>
            ))}
          </Select>
        </Label>

        <Label htmlFor="sortBy-select">
          sortBy:
          <Select name="sortBy" id="sortBy-select">
            {SORT_BY.map((sortBy) => (
              <Option key={sortBy.value} value={sortBy.value}>
                {sortBy.display}
              </Option>
            ))}
          </Select>
        </Label>
      </Form>
    </FormContainer>
  );
};

export default GameFilter;
