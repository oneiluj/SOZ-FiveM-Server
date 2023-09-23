import { Module } from '../../core/decorators/module';
import { AlbumProvider } from './album.provider';
import { computerProvider } from './computer.provider';
import { ItemBookProvider } from './item.book.provider';
import { ItemProvider } from './item.provider';

@Module({
    providers: [ItemProvider, AlbumProvider, ItemBookProvider,computerProvider],
})
export class ItemModule {}
