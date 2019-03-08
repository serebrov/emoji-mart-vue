render(h) {
    return (
        <div class="emoji-mart-holder" onClick={this.onSelfClick}>
          <div class="emoji-mart-body" onMouseleave={this.onMouseLeave}>
            <div class="emoji-mart-icons">
              <div class="emoji-mart-icon-holder">
                <button type="button" class="ca-icon icon-close emoji-mart-icon-close" onClick={this.onCloseClick}></button>
              </div>
              <div class="emoji-mart-icon-holder">
                <i class="icon icon_search emoji-mart-icon-search"></i>
              </div>
            </div>
            {
            <TypedPicker
                scopedSlots={{
                    searchTemplate: slotProps => {
                        return [
                          <div class="emoji-mart-search search-test">
                            <input type="text"
                                   placeholder={slotProps.i18n.search}
                                   onInput={ (event) => {
                                       slotProps.onSearch(event.target.value)
                                   } }
                             />
                          </div>
                      ]
                    },
                    previewEmojiTemplate: slotProps => {
                        let name = slotProps.emoji ? '~' + slotProps.emoji.name : ''
                        let shortNamePreview = slotProps.emoji
                            ? slotProps.emoji.emoticons ? slotProps.emoji.emoticons[0] : slotProps.emoji.colons
                            : ''
                        return [
                          <div>
                              <div class="emoji-mart-preview-emoji">
                                <NimbleEmoji
                                  data={slotProps.data}
                                  emoji={slotProps.emoji}
                                  native={slotProps.emojiProps.native}
                                  skin={slotProps.emojiProps.skin}
                                  set={slotProps.emojiProps.set}
                                />
                              </div>

                              <div class="emoji-mart-preview-data">
                                <div class="emoji-mart-preview-name">{ name }</div>
                                <div class="emoji-mart-preview-shortnames">{ shortNamePreview }</div>
                              </div>

                              <div class="emoji-mart-preview-skins">
                                <Skins skin={slotProps.skinProps.skin} onChange={ $event => slotProps.onChange($event) } />
                              </div>
                          </div>
                        ]
                    },
                    previewIdleTemplate: slotProps => {
                        return [
                        <div>
                          <div class="emoji-mart-preview-emoji">
                            <NimbleEmoji
                              data={slotProps.data}
                              emoji={slotProps.idleEmoji}
                              native={slotProps.emojiProps.native}
                              skin={slotProps.emojiProps.skin}
                              set={slotProps.emojiProps.set}
                            />
                          </div>

                          <div class="emoji-mart-preview-data">
                            <span class="emoji-mart-title-label">{ slotProps.title }</span>
                          </div>

                          <div class="emoji-mart-preview-skins">
                            <Skins skin={ slotProps.skinProps.skin } onChange={ $event => slotProps.onSkinChange($event) } />
                          </div>
                      </div>
                      ]
                    }
                }}
                onSelect={this.selectEmoji}
                title="Pick your emoji..."
                emoji="point_up" set="emojione"
                perLine={this.perLine}
            />
            }
          </div>
        </div>
    );
}
